const { createClient } = require('@supabase/supabase-js');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; 

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const EXCEL_PATH = path.join(process.cwd(), '../data/cards_repository.xlsx');

async function ingestCards() {
  console.log(`Reading Excel file from: ${EXCEL_PATH}`);

  if (!fs.existsSync(EXCEL_PATH)) {
    console.error('File not found!');
    process.exit(1);
  }

  const workbook = XLSX.readFile(EXCEL_PATH);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);

  console.log(`Found ${data.length} rows.`);
  if (data.length > 0) {
      console.log('First Row Keys:', Object.keys(data[0]));
      console.log('First Row Sample:', JSON.stringify(data[0], null, 2));
  }

  let successCount = 0;
  let errorCount = 0;

  // Helper to find key
  const findKey = (obj, ...candidates) => {
    const keys = Object.keys(obj);
    for (const candidate of candidates) {
        const match = keys.find(k => k.trim().toLowerCase() === candidate.toLowerCase());
        if (match) return obj[match];
    }
    return undefined;
  };

  for (const row of data) {
    // Map Excel columns to DB columns
    // Actual keys: Card_ID, Layer, Role_Scope, Objective_EN, Objective_ES, Critical, Dependencies, Version, Status
    const id = row['Card_ID'];
    
    if (!id) {
       console.warn('Skipping row without ID');
       continue;
    }

    console.log(`Processing ${id}...`);

    let status = (row['Status'] || 'draft').toLowerCase();
    if (status === 'approved') status = 'active';

    const cardData = {
      id: String(id).trim(),
      title_en: row['Objective_EN'] || 'Untitled',
      title_es: row['Objective_ES'] || 'Sin Título',
      description_en: row['Objective_EN'] || '',
      description_es: row['Objective_ES'] || '',
      difficulty_level: 1, 
      status: status,
      metadata: {
        layer: row['Layer'],
        role_scope: row['Role_Scope'],
        critical: row['Critical'] === 'Yes'
      },
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('cards')
      .upsert(cardData, { onConflict: 'id' });

    if (error) {
      console.error(`Error upserting card ${id}:`, error.message);
      errorCount++;
    } else {
      console.log(`Upserted card ${id}`);
      successCount++;
    }

    // Dependencies
    const depsRaw = row['Dependencies'] || row['Prerequisites'];
    if (depsRaw) {
        const deps = String(depsRaw).split(',').map(d => d.trim());
        for (const depId of deps) {
            if (!depId) continue;
            // Clean depId - extract just the ID part if it has extra text? 
            // Assuming clean IDs for now.
            const { error: depError } = await supabase
                .from('card_dependencies')
                .upsert({ card_id: id, dependency_id: depId });
            
            if (depError) {
                // console.warn(`Error linking dependency ${depId} for card ${id}:`, depError.message);
            }
        }
    }
  }

  console.log(`Ingestion complete. Success: ${successCount}, Errors: ${errorCount}`);
}

ingestCards().catch(e => console.error(e));

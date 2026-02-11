import { createClient } from '@supabase/supabase-js';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; // Must use service role to bypass RLS for ingestion

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const EXCEL_PATH = path.join(__dirname, '../data/cards_repository.xlsx');

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

  for (const row of data as any[]) {
    // Map Excel columns to DB columns
    // Adjust these keys based on the actual Excel header names!
    // Using loose matching for now.
    const id = row['Card ID'] || row['ID'] || row['Code'];
    if (!id) {
       console.warn('Skipping row without ID:', row);
       continue;
    }

    const cardData = {
      id: String(id).trim(),
      title_en: row['Title (EN)'] || row['Title EN'] || 'Untitled',
      title_es: row['Title (ES)'] || row['Title ES'] || 'Sin Título',
      description_en: row['Description (EN)'] || row['Description EN'] || '',
      description_es: row['Description (ES)'] || row['Description ES'] || '',
      difficulty_level: parseInt(row['Difficulty'] || '1') || 1,
      status: 'active', // Default to active
      updated_at: new Date().toISOString()
    };

    const { error } = await supabase
      .from('cards')
      .upsert(cardData, { onConflict: 'id' });

    if (error) {
      console.error(`Error upserting card ${id}:`, error.message);
    } else {
      console.log(`Upserted card ${id}`);
    }

    // Handle Dependencies if column exists
    const depsRaw = row['Dependencies'] || row['Prerequisites'];
    if (depsRaw) {
        const deps = String(depsRaw).split(',').map(d => d.trim());
        for (const depId of deps) {
            if (!depId) continue;
            const { error: depError } = await supabase
                .from('card_dependencies')
                .upsert({ card_id: id, dependency_id: depId });
            
            if (depError) {
                console.warn(`Error linking dependency ${depId} for card ${id}:`, depError.message);
            }
        }
    }
  }

  console.log('Ingestion complete.');
}

ingestCards().catch(e => console.error(e));

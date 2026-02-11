import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config';

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''; 

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const OUTPUT_DIR = path.join(__dirname, '../docs/generated/lms_exports');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function exportLMSMarkdown() {
  console.log('Fetching approved lessons...');

  const { data: lessons, error } = await supabase
    .from('lessons')
    .select('*, cards(title_en, title_es)')
    .eq('status', 'approved');

  if (error) {
    console.error('Error fetching lessons:', error.message);
    process.exit(1);
  }

  for (const lesson of lessons) {
    const cardTitle = lesson.language === 'es' ? lesson.cards.title_es : lesson.cards.title_en;
    const filename = `${lesson.card_id}_v${lesson.version}_${lesson.language}.md`;
    const filePath = path.join(OUTPUT_DIR, filename);
    
    // Add LMS specific metadata if needed
    const fileContent = `---
title: ${cardTitle}
card_id: ${lesson.card_id}
version: ${lesson.version}
language: ${lesson.language}
---

${lesson.content}
`;

    fs.writeFileSync(filePath, fileContent);
    console.log(`Exported ${filename}`);
  }

  console.log('Export complete.');
}

exportLMSMarkdown().catch(e => console.error(e));

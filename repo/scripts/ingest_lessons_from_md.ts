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

const LESSONS_DIR_EN = path.join(__dirname, '../docs/generated/lessons/en');
const LESSONS_DIR_ES = path.join(__dirname, '../docs/generated/lessons/es');

async function ingestLessons(dir: string, lang: 'en' | 'es') {
  console.log(`Scanning directory: ${dir}`);
  if (!fs.existsSync(dir)) {
      console.warn(`Directory does not exist: ${dir}`);
      return;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    // Expected format: {Card_ID}__{version}.md
    // Example: C001__1.md
    const regex = /^(.*)__(\d+)\.md$/;
    const match = file.match(regex);

    if (!match) {
      console.warn(`Skipping file with invalid naming format: ${file}`);
      continue;
    }

    const cardId = match[1];
    const version = parseInt(match[2]);
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');

    console.log(`Processing ${file} -> Card: ${cardId}, Version: ${version}, Lang: ${lang}`);

    const { error } = await supabase
      .from('lessons')
      .upsert({
        card_id: cardId,
        version: version,
        language: lang,
        content: content,
        status: 'approved', // Assuming generated content is approved
        updated_at: new Date().toISOString()
      }, { onConflict: 'card_id, version, language' });

    if (error) {
        console.error(`Error upserting lesson for ${file}:`, error.message);
    } else {
        console.log(`Upserted lesson for ${file}`);
    }
  }
}

async function main() {
    await ingestLessons(LESSONS_DIR_EN, 'en');
    await ingestLessons(LESSONS_DIR_ES, 'es');
    console.log('Lesson ingestion complete.');
}

main().catch(e => console.error(e));

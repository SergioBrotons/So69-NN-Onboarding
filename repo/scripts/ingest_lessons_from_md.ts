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

// Scan both the "generated" internal folder AND the user's source folders
const DIRS_TO_SCAN = [
  { path: path.join(process.cwd(), '../docs/generated/lessons/en'), lang: 'en' },
  { path: path.join(process.cwd(), '../docs/generated/lessons/es'), lang: 'es' },
  { path: path.join(process.cwd(), '../../Lessons/EN'), lang: 'en' },
  { path: path.join(process.cwd(), '../../Lessons/ES'), lang: 'es' }
];

async function ingestLessons() {
  for (const { path: dir, lang } of DIRS_TO_SCAN) {
    console.log(`Scanning directory: ${dir}`);
    if (!fs.existsSync(dir)) {
        console.warn(`Directory does not exist: ${dir}`);
        continue;
    }

    const files = fs.readdirSync(dir);

    for (const file of files) {
      if (!file.endsWith('.md')) continue;

      let cardId: string | null = null;
      let version = 1;

      // Pattern 1: {Card_ID}__{Version}.md (Generated)
      const regexGenerated = /^(.*)__(\d+)\.md$/;
      // Pattern 2: {Card_ID}_{Title}.md (User Source)
      // Supports: COMP-01_Title, ROLE-EXEC-01_Title
      const regexUser = /^([a-zA-Z0-9-]+)_(.*)\.md$/;
      // Pattern 3: {Card_ID}.md (Simple)
      const regexSimple = /^([a-zA-Z0-9-]+)\.md$/;

      const matchGen = file.match(regexGenerated);
      const matchUser = file.match(regexUser);
      const matchSimple = file.match(regexSimple);

      if (matchGen) {
          cardId = matchGen[1];
          version = parseInt(matchGen[2]);
      } else if (matchUser) {
          cardId = matchUser[1];
          version = 1; // Default to version 1 for source files
      } else if (matchSimple) {
          cardId = matchSimple[1];
          version = 1;
      }

      if (!cardId) {
        console.warn(`Skipping file with unrecognized naming format: ${file}`);
        continue;
      }

      const content = fs.readFileSync(path.join(dir, file), 'utf-8');

      console.log(`Processing ${file} -> Card: ${cardId}, Version: ${version}, Lang: ${lang}`);

      const { error } = await supabase
        .from('lessons')
        .upsert({
          card_id: cardId,
          version: version,
          language: lang,
          content: content,
          status: 'approved',
          updated_at: new Date().toISOString()
        }, { onConflict: 'card_id, version, language' });

      if (error) {
          if (error.code === '23503') { // Foreign key violation
             console.warn(`SKIPPING lesson for ${file}: Card ID '${cardId}' not found in database.`);
          } else {
             console.error(`Error upserting lesson for ${file}:`, error.message);
          }
      } else {
          console.log(`Upserted lesson for ${file}`);
      }
    }
  }
}

async function main() {
    await ingestLessons();
    console.log('Lesson ingestion complete.');
}

main().catch(e => console.error(e));

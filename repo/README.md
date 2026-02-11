# So69-NN-Onboarding Repository

This repository contains the LMS platform for the So69-NN-Onboarding project. It
includes the content management system, the learning platform (Next.js), and the
integration adapters.

## Structure

- `/docs`: Documentation and Content
  - `/canonical`: Source of truth for non-card content (glossary, narrative,
    etc.)
  - `/generated`: Machine-generated lesson files and exports.
- `/data`: Raw data inputs (Excel files).
- `/supabase`: Database migrations and configuration.
- `/scripts`: Utilities for data ingestion and export.
- `/apps/web`: The main LMS web application (Next.js).
- `/lms`: Adapters for external LMS integration (Open-LMS).

## Getting Started

### 1. Database Setup

Ensure you have Supabase CLI installed.

```bash
cd repo/supabase
supabase start
supabase migration up
```

### 2. Ingest Content

To load the cards from the Excel file into the database:

```bash
# Install dependencies
cd repo/scripts
npm install

# Run ingestion
npx ts-node ingest_cards_from_excel.ts
```

### 3. Run the App

```bash
cd repo/apps/web
npm install
npm run dev
```

## Canonical Sources

The source of truth for the curriculum structure is
`repo/data/cards_repository.xlsx`. The source of truth for generated lessons is
`repo/docs/generated/lessons`.

**Lesson Filename Format:** Lesson files must follow the pattern:
`{Card_ID}__{Version}.md` (e.g., `C001__1.md` or `COMP-01__1.md`). Files not
matching this pattern will be skipped by the ingestion script.

**Do not manually edit the database for content that originates in these
files.** Use the ingestion scripts.

## Deployment

The web app is designed to be deployed on Vercel. Connect the repository to
Vercel and set the Root Directory to `apps/web`. Configure the
`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment
variables.

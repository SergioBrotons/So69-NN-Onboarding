# Open-LMS Integration Plan

## Strategy Selection

**Selected Strategy: B) Keep Open-LMS as UI and feed content via API**

### Rationale

- **Low Risk**: Avoids modifying the complex core of Open-LMS/Moodle.
- **Maintainability**: Keeps the custom content repository (Supabase) decoupled
  from the delivery platform.
- **Upgradability**: Open-LMS can be updated without breaking custom database
  forks.

## Integration Architecture

### 1. The "So69 Adapter" Plugin

We will create a local plugin for Open-LMS (Moodle) that acts as a
synchronization agent.

- **Type**: `local_so69_sync`
- **Function**: Scheduled task (Cron) that pulls approved lessons from our
  Supabase API.

### 2. API Contract

The Next.js app (or a dedicated Edge Function) will expose a secure API
endpoint: `GET /api/v1/lms/export?since={timestamp}`

**Response format (JSON):**

```json
{
    "cards": [
        {
            "id": "C001",
            "title": "Intro to NN",
            "content_html": "<h1>...</h1>",
            "version": 1,
            "language": "en"
        }
    ]
}
```

### 3. Mapping Logic

- **Cards** -> **Moodle Activities** (Page or Lesson module)
- **Dependencies** -> **Restrict Access** conditions
- **User Progress** -> **Activity Completion**

### 4. Authentication

- The Plugin will authenticate via a Service Token (stored in Supabase
  `auth.identities` or a separate API key table).

## Implementation Steps (Future Phase)

1. Develop `local_so69_sync` Moodle plugin.
2. Implement `/api/lms/sync` in Next.js `app/api/`.
3. Configure Moodle Cron to run hourly.

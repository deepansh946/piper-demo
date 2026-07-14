# piper-demo

Tiny Express app with intentional bugs — used by Piper **Try Demo** mode.

## Run

```bash
npm install
npm start
```

Server: `http://localhost:3001`

## Routes

| Method | Path | Notes |
|--------|------|--------|
| GET | `/` | Hello |
| GET | `/sum?a=&b=` | Uses buggy `addNumbers` |
| GET | `/divide?a=&b=` | Division (zero-safe) |

No `/health` yet — good task for Piper.

## Suggested prompts

1. What bugs are present in this codebase?
2. Fix the bugs in index.js
3. Add a /health endpoint to the server
4. Add unit tests for the main functions

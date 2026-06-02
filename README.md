# Ping Chat

A small React chat UI that calls a `/ping` API and displays the response. Built with Vite, Mantine, TanStack Query, and an Express backend.

## Setup

```bash
npm install
cp .env.example .env
```

## Run locally

You need two terminals:

```bash
# Terminal 1 — frontend (http://localhost:3000)
npm run dev

# Terminal 2 — API (http://localhost:8000)
npm run server
```

Open [http://localhost:3000](http://localhost:3000) and click **Ping** to send a request.

## Environment

Server config lives in `.env`:

| Variable        | Description                          |
| --------------- | ------------------------------------ |
| `ENV`           | `development` or `production`        |
| `VERSION`       | API version returned in ping response |
| `PING_DELAY_MS` | Optional artificial delay (ms)       |

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start Vite dev server    |
| `npm run server`| Start Express API        |
| `npm run build` | Build frontend for prod  |
| `npm run lint`  | Run ESLint               |

# Myanmar Travel Assistant

A beginner-friendly travel-planning website for foreign visitors to Myanmar.

**Important:** this project currently uses clearly marked **sample / demo data**. It does **not** provide visa rules, safety advice, prices, opening hours, or live transport information. Always check official sources before you travel.

## Project layout

```
myanmar-travel-assistant/
  frontend/   React + Vite + TypeScript + Tailwind
  backend/    FastAPI (Python)
  docs/       Project notes
  data/       Verified source files (later)
```

## What Phase 1 includes

- Responsive homepage: navigation, hero, four sample destination cards, footer
- FastAPI `GET /health` endpoint
- Shared `Destination` type with `source_url`, `last_verified`, and `status`

Other pages (destination details, itineraries, tips, about, AI assistant) are listed in the nav as coming later.

## Prerequisites

- Node.js 20+ (npm)
- Python 3.11 or newer (this machine now has Python 3.12)
- Git

On Windows, open a **new** terminal after installing Python. If `python --version` still opens the Microsoft Store, disable the `python.exe` / `python3.exe` App execution aliases, or call Python with:

```powershell
py -3.12 --version
```

## Frontend setup

```powershell
cd myanmar-travel-assistant\frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Backend setup

From `myanmar-travel-assistant\backend`:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements-dev.txt
uvicorn app.main:app --reload --port 8000
```

Health check: [http://localhost:8000/health](http://localhost:8000/health)

If PowerShell blocks the venv script, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Then activate `.venv` again.

## Tests

```powershell
cd myanmar-travel-assistant\backend
.\.venv\Scripts\Activate.ps1
pytest
```

## Data rules

Every travel record must include:

- `source_url`
- `last_verified` (or `null` until verified)
- `status`: `sample`, `unverified`, or `verified`

The future AI assistant must only answer from project content. If the data does not support an answer, it must say so and point the user to an official source.

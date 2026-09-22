"""
FastAPI application entry point.

Phase 1 only exposes GET /health so we can confirm the API process starts.
Travel data endpoints will be added after the homepage is working.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Myanmar Travel Assistant API",
    description="Travel data API. Phase 1 includes a health check only.",
    version="0.1.0",
)

# The React app runs on Vite's default port. CORS lets the browser call this API later.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

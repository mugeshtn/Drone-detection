from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/detection")
def get_detection():
    return {
        "angle": 65.2,
        "confidence": 0.95,
        "data": [1, 0, 0, 1],
        "time": datetime.now().isoformat()
    }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.models.request_models import (
    SimulationRequest,
    CompareRequest
)
from app.algorithms.fcfs import fcfs
from app.algorithms.sstf import sstf
from app.algorithms.scan import scan
from app.algorithms.cscan import cscan
from app.algorithms.look import look
from app.algorithms.clook import clook

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
@app.get("/")
def home():
    return {
        "message": "Disk Scheduling Backend Running"
    }

def validate_input(data):
    print("REQUESTS =", data.requests)
    if len(data.requests)==0:
        return {
            "error": "Request list cannot be empty"
        }
    if len(data.requests) > 1000:
        return {
            "error": "Too many requests"
        }
    if data.head < 0 or data.head >= data.disk_size:
        return {
            "error": "Invalid head position"
        }
    if data.direction not in ["left", "right"]:
        return {
            "error": "Invalid direction"
        }
    for request in data.requests:
        if request < 0 or request >= data.disk_size:
            return {
                "error": "Request exceeds disk size"
            }
   
    return None

@app.post("/stimulate")
def stimulate(data: SimulationRequest):
    validation_error = validate_input(data)

    if validation_error:
        return validation_error
    
    if data.algorithm.lower() == "fcfs":
        result = fcfs(data.requests,data.head)
        return result
    elif data.algorithm.lower() == "sstf":
        result = sstf(data.requests,data.head)
        return result
    elif data.algorithm.lower() == "scan":
        result = scan(data.requests,data.head,data.disk_size,data.direction)
        return result
    elif data.algorithm.lower() == "cscan":
        result = cscan(data.requests,data.head,data.disk_size,data.direction)
        return result
    elif data.algorithm.lower() == "look":
        result = look(data.requests,data.head,data.direction)
        return result
    elif data.algorithm.lower() == "clook":
        result = clook(data.requests,data.head,data.direction)
        return result
    return {
        "error": "Algorithm not supported"
    }
@app.post("/compare")
def compare(data: CompareRequest):
    validation_error = validate_input(data)
    if validation_error:
        return validation_error
    results = {}
    results["fcfs"] = fcfs(data.requests,data.head)
    results["sstf"] = sstf(data.requests,data.head)
    results["scan"] = scan(data.requests,data.head,data.disk_size,data.direction)
    results["cscan"] = cscan(data.requests,data.head,data.disk_size,data.direction)
    results["look"] = look(data.requests,data.head,data.direction)
    results["clook"] = clook(data.requests,data.head,data.direction)
    best_algorithm = min(
        results,
        key=lambda algorithm:
        results[algorithm]["total_seek_time"]
    )
    return {
        "results": results,
        "best_algorithm": best_algorithm
    }
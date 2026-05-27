from pydantic import BaseModel
from typing import List


class SimulationRequest(BaseModel):
    algorithm: str
    requests: List[int]
    head: int
    disk_size: int
    direction: str

class CompareRequest(BaseModel):
    requests: List[int]
    head: int
    disk_size: int
    direction: str
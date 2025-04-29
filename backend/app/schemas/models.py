from pydantic import BaseModel

class SOAPRequest(BaseModel):
    transcript: str

from fastapi import APIRouter, UploadFile
from app.services.transcription_service import transcribe_audio
from app.services.ai_service import generate_soap_note
from app.schemas.models import SOAPRequest

router = APIRouter()

@router.post("/transcribe")
async def transcribe(file: UploadFile):
    transcript = await transcribe_audio(file)
    return {"transcript": transcript}

@router.post("/generate-soap")
async def generate_soap(request: SOAPRequest):
    soap_note = await generate_soap_note(request.transcript)
    return {"soap_note": soap_note}

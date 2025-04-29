import openai
from app.config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

async def generate_soap_note(transcript: str):
    prompt = f"""
You are a medical scribe. Based on the conversation below, generate a SOAP note.

Conversation:
{transcript}

SOAP Note:
"""
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.2,
    )
    return response.choices[0].message['content']

## Features

- Start and stop audio recordings via a simple interface
- Transcribe 30–40 minute medical conversations (via Deepgram)
- Generate high-quality SOAP notes using OpenAI GPT-4
- Fast and efficient — designed to minimize latency
- Easily adaptable for edge cases (multi-speaker, accent handling)

---

## Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Frontend     | React + TypeScript + Vite     |
| Backend      | FastAPI (Python)              |
| AI Services  | OpenAI GPT-4                  |
| Transcription| Deepgram API                  |

---


### Prerequisites

- Node.js (v18+)
- Python (3.9+)
- Deepgram API key
- OpenAI API key

## Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/asha-health-scribe.git
   cd asha-health-scribe
Configure backend

Add your OpenAI and Deepgram keys in:

arduino

backend/app/config.py
Run backend


cd backend
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
bash run.sh
Run frontend

bash
Copy
Edit
cd ../frontend
npm install
npm run dev
Open your browser:

Frontend: FEBaseurl
Backend docs: BEBaseurl/docs

Sample Usage
Click Start Recording to begin capturing a conversation.

Click Stop Recording when the conversation ends.

Wait a few seconds for the SOAP note to be auto-generated.

Review the formatted note and copy as needed.


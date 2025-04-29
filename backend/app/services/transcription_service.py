import aiohttp

async def transcribe_audio(file):
    url = "https://api.deepgram.com/v1/listen"
    headers = {
        "Authorization": "Token YOUR_DEEPGRAM_API_KEY",
        "Content-Type": "audio/webm"
    }

    async with aiohttp.ClientSession() as session:
        audio_data = await file.read()
        async with session.post(url, headers=headers, data=audio_data) as resp:
            result = await resp.json()
            return result['results']['channels'][0]['alternatives'][0]['transcript']

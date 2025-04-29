import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const transcribeAudio = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.webm');
    const response = await axios.post(`${API_URL}/transcribe`, formData);
    return response.data.transcript;
};

export const generateSOAP = async (transcript: string) => {
    const response = await axios.post(`${API_URL}/generate-soap`, { transcript });
    return response.data.soap_note;
};

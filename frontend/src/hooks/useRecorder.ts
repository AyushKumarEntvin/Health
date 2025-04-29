import { useState, useRef } from 'react';

export const useRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const audioChunks: Blob[] = [];

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = (e) => {
            audioChunks.push(e.data);
        };
        mediaRecorder.current.onstop = () => {
            const blob = new Blob(audioChunks, { type: 'audio/webm' });
            setAudioUrl(URL.createObjectURL(blob));
        };
        mediaRecorder.current.start();
        setRecording(true);
    };

    const stopRecording = () => {
        mediaRecorder.current?.stop();
        setRecording(false);
    };

    return { recording, audioUrl, startRecording, stopRecording };
};

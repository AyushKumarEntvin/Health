import { useState } from 'react';
import { Recorder } from '../components/Recorder';
import { SoapNote } from '../components/SoapNote';
import { transcribeAudio, generateSOAP } from '../services/api';

export const Home = () => {
    const [soapNote, setSoapNote] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRecordingStop = async (audioUrl: string) => {
        setLoading(true);
        const blob = await fetch(audioUrl).then(r => r.blob());
        const transcript = await transcribeAudio(blob);
        const soap = await generateSOAP(transcript);
        setSoapNote(soap);
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-6">AI Medical Scribe</h1>
            <Recorder onStop={handleRecordingStop} />
            {loading && <p className="mt-4">Processing...</p>}
            {soapNote && <SoapNote note={soapNote} />}
        </div>
    );
};

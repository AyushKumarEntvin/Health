import { useRecorder } from '../hooks/useRecorder';

interface RecorderProps {
    onStop: (audioUrl: string) => void;
}

export const Recorder: React.FC<RecorderProps> = ({ onStop }) => {
    const { recording, audioUrl, startRecording, stopRecording } = useRecorder();

    const handleStop = () => {
        stopRecording();
        if (audioUrl) onStop(audioUrl);
    };

    return (
        <div className="flex flex-col items-center">
            <button onClick={recording ? handleStop : startRecording} className="px-4 py-2 bg-blue-500 text-white rounded">
                {recording ? 'Stop Recording' : 'Start Recording'}
            </button>
        </div>
    );
};

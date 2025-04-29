interface SoapNoteProps {
    note: string;
}

export const SoapNote: React.FC<SoapNoteProps> = ({ note }) => {
    return (
        <div className="p-4 border rounded bg-gray-50 mt-4">
            <h2 className="text-lg font-bold mb-2">Generated SOAP Note</h2>
            <pre className="whitespace-pre-wrap">{note}</pre>
        </div>
    );
};

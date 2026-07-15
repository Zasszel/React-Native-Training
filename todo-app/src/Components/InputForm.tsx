import { useState } from "react";

type Props = {
    onSubmit: (text: string) => void;
};

export function InputForm({onSubmit}: Props) {
    const [text, setText] = useState('');

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (text.trim() == '') return;
        onSubmit(text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"  value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit">OK</button>
        </form>
    );
    
}
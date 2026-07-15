type Props = {
    inputs : string[];
}

export function InputList({inputs} : Props){
    return (
        <ul>
            {inputs.map((input) => (
                <p>{input}</p>
            ))}
        </ul>
    );
}
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="optionChoices">
                <Form.Label>Options / Choice: {answer}</Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    <Form.Check inline></Form.Check>{" "}
                    {options.map((option: string) => (
                        <option key={option} value={option}></option>
                    ))}
                </Form.Select>
            </Form.Group>
            {answer === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}

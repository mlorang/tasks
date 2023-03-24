import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "magenta",
    "orange",
    "purple",
    "yellow",
    "turquoise"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColorSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        setColor(event.target.value);
    }

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3 data-testid="colored-box">Change Color</h3>
            <div>
                The chosen color is:{" "}
                <span style={{ backgroundColor: color }}> {color}</span>
            </div>
            <Form.Group controlId="colorChoice">
                <Form.Label>Pick a color</Form.Label>
                <Form.Select value={color} onChange={updateColorSelect}>
                    {COLORS.map((color: string) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </Form.Select>
                <Form.Check
                    inline
                    type="radio"
                    name="colorChoice"
                    onChange={updateColor}
                    id="choice"
                    label="red"
                    value="red"
                    checked={color === "red"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colorChoice"
                    onChange={updateColor}
                    id="choice"
                    label="blue"
                    value="blue"
                    checked={color === "blue"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colorChoice"
                    onChange={updateColor}
                    id="choice"
                    label="green"
                    value="green"
                    checked={color === "green"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colorChoice"
                    onChange={updateColor}
                    id="choice"
                    label="magenta"
                    value="magenta"
                    checked={color === "magenta"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colorChoice"
                    onChange={updateColor}
                    id="choice"
                    label="orange"
                    value="orange"
                    checked={color === "orange"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colorChoice"
                    onChange={updateColor}
                    id="choice"
                    label="purple"
                    value="purple"
                    checked={color === "purple"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colorChoice"
                    onChange={updateColor}
                    id="choice"
                    label="yellow"
                    value="yellow"
                    checked={color === "yellow"}
                />
                <Form.Check
                    inline
                    type="radio"
                    name="colorChoice"
                    onChange={updateColor}
                    id="choice"
                    label="turquoise"
                    value="turquoise"
                    checked={color === "turquoise"}
                />
            </Form.Group>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface valueProp {
    value: number;
    setValue: (newValue: number) => void;
}

function Doubler(prop: valueProp): JSX.Element {
    return (
        <Button onClick={() => prop.setValue(2 * prop.value)}>Double</Button>
    );
}

function Halver(prop: valueProp): JSX.Element {
    return (
        <Button onClick={() => prop.setValue(0.5 * prop.value)}>Halve</Button>
    );
}

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue}></Doubler>
            <Halver value={value} setValue={setValue}></Halver>
        </div>
    );
}

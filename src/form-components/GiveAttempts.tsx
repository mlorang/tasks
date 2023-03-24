import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [request, setRequest] = useState<string>("0");
    const [temp, setTemp] = useState<number>(3);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                Attempts: {temp} / Requested Attempts: {request}
            </div>
            <div>
                <Button onClick={() => setTemp(temp - 1)} disabled={temp <= 0}>
                    Use
                </Button>
                <Button
                    onClick={() => setTemp(parseInt(request) + temp)}
                    disabled={request === ""}
                >
                    Gain
                </Button>
            </div>
            <Form.Group controlId="formAttemptRequest">
                <Form.Label>Enter Requested Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}

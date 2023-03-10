import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setD1] = useState<number>(1);
    const [d2, setD2] = useState<number>(6);
    return (
        <div>
            Two Dice
            <span data-testid="left-die">
                <Button onClick={() => setD1(d6)}>Roll Left = {d1}</Button>
            </span>
            <span data-testid="right-die">
                <Button onClick={() => setD2(d6)}>Roll Right = {d2}</Button>
            </span>
            <div>{d1 === 1 && d2 === 1 ? "Lose" : ""}</div>
            <div>{d1 === d2 && d1 !== 1 && d2 !== 1 ? "Win" : ""}</div>
        </div>
    );
}

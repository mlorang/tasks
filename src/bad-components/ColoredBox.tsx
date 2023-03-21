import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorProps {
    SetColorIndex: (value: number) => void;
    ColorIndex: number;
}

function ChangeColor(props: ColorProps): JSX.Element {
    return (
        <Button
            onClick={() =>
                props.SetColorIndex((1 + props.ColorIndex) % COLORS.length)
            }
        >
            Current Color = {COLORS[props.ColorIndex]}
        </Button>
    );
}

function ColorPreview(props: ColorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[props.ColorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {() => ChangeColor} </span>
            <div>
                <ChangeColor
                    ColorIndex={colorIndex}
                    SetColorIndex={setColorIndex}
                ></ChangeColor>

                <ColorPreview
                    ColorIndex={colorIndex}
                    SetColorIndex={setColorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}

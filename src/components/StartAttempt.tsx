import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [quiz, setQuiz] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempt(attempt - 1);
        setQuiz(true);
    }

    return (
        <div>
            <Button onClick={startQuiz} disabled={quiz || attempt <= 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setQuiz(false)} disabled={!quiz}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAttempt(attempt + 1)} disabled={quiz}>
                Mulligan = {attempt}
            </Button>
        </div>
    );
}

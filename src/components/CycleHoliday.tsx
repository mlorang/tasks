import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎁" | "🎃" | "🛠" | "🦃" | "🪖";

    const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
        "🎁": "🎃",
        "🎃": "🛠",
        "🛠": "🪖",
        "🪖": "🦃",
        "🦃": "🎁"
    };

    const HOLIDAY_YEAR: Record<Holiday, Holiday> = {
        "🪖": "🛠",
        "🛠": "🎃",
        "🎃": "🦃",
        "🦃": "🎁",
        "🎁": "🛠"
    };

    return <div>Cycle Holiday</div>;
}

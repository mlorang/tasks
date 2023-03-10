import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Holiday: 🎁"
        | "Holiday: 🎃"
        | "Holiday: 🛠"
        | "Holiday: 🦃"
        | "Holiday: 🪖";
    const HOLIDAY_ALPHABET: Record<Holiday, Holiday> = {
        "Holiday: 🎁": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🛠",
        "Holiday: 🛠": "Holiday: 🪖",
        "Holiday: 🪖": "Holiday: 🦃",
        "Holiday: 🦃": "Holiday: 🎁"
    };
    const HOLIDAY_YEAR: Record<Holiday, Holiday> = {
        "Holiday: 🪖": "Holiday: 🛠",
        "Holiday: 🛠": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🦃",
        "Holiday: 🦃": "Holiday: 🎁",
        "Holiday: 🎁": "Holiday: 🪖"
    };
    const [holidayAlphabet, setHolidayAlphabet] =
        useState<Holiday>("Holiday: 🎁");
    const [holidayYear, setHolidayYear] = useState<Holiday>("Holiday: 🪖");

    function changeHolidayAlphabet(): void {
        const newHoliday = HOLIDAY_ALPHABET[holidayAlphabet];
        setHolidayAlphabet(newHoliday);
        //console.log(newHoliday);
    }
    function changeHolidayYear(): void {
        const newHoliday = HOLIDAY_YEAR[holidayYear];
        setHolidayYear(newHoliday);
        //console.log(newHoliday);
    }
    return (
        <div>
            <Button onClick={changeHolidayAlphabet}>Advance by Alphabet</Button>
            {holidayAlphabet}
            <Button onClick={changeHolidayYear}>Advance by Year</Button>
            {holidayYear}
        </div>
    );
}

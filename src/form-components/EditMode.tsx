import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [studentName, setStudentName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateStudentName(event: React.ChangeEvent<HTMLInputElement>) {
        setStudentName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                inline
                type="switch"
                id="is-edit-mode-check"
                label="Set Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            />
            <Form.Check
                inline
                type="checkbox"
                id="student-check"
                label="Are you a student"
                name="Are you a student"
                checked={isStudent}
                onChange={updateIsStudent}
            />

            <Form.Group controlId="formStudentName">
                <Form.Label>Input Name</Form.Label>
                <Form.Control
                    disabled={editMode === false}
                    value={studentName}
                    onChange={updateStudentName}
                />
            </Form.Group>

            {isStudent === true
                ? studentName + " is a student"
                : studentName + " is not a student"}
        </div>
    );
}

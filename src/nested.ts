import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newArray = questions.filter(
        (question: Question): boolean => question.published
    );
    //console.log(newArray);
    return newArray;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const notEmpty = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return notEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const newQuestion = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (newQuestion?.id === id) {
        return newQuestion;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const newArray = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return newArray;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newArray = questions.map((question: Question) => question.name);
    return newArray;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let sum = 0;
    questions.map((question: Question) => (sum += question.points));
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the POINTS of PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let sum = 0;
    questions.map((question: Question): number =>
        question.published === true ? (sum += question.points) : sum
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const str = "id,name,options,points,published\n";
    const questionCSV = questions
        .map(
            (question: Question): string =>
                question.id +
                "," +
                question.name +
                "," +
                question.options.length +
                "," +
                question.points +
                "," +
                question.published
        )
        .join("\n");
    return str + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newQuestionsDeep = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    newQuestionsDeep.map((question: Question) => (question.published = true));
    return newQuestionsDeep;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    let bool = true;
    const questionType = questions[0].type;
    //console.log(questionType);
    questions.map((question: Question): boolean =>
        question.type === questionType ? bool : (bool = false)
    );
    return bool;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion: Question = makeBlankQuestion(id, name, type);
    //questions.push(newQuestion);
    const newQuestionsDeep = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    newQuestionsDeep.push(newQuestion);
    //console.log(newQuestionsDeep);
    return newQuestionsDeep;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const targetIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const deepCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    //deepCopy.map((question: Question): boolean => (question.published = true));
    deepCopy[targetIndex].name = newName;
    //console.log(deepCopy);
    return deepCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const targetIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const deepCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    deepCopy[targetIndex].type = newQuestionType;
    if (deepCopy[targetIndex].type !== "multiple_choice_question") {
        deepCopy[targetIndex].options = [];
        return deepCopy;
    }
    return deepCopy;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const targetIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    if (targetOptionIndex === -1) {
        deepCopy[targetIndex].options.push(newOption);
        return deepCopy;
    }
    deepCopy[targetIndex].options[targetOptionIndex] = newOption;
    return deepCopy;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const targetIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const questionDupe = duplicateQuestion(newId, questions[targetIndex]);
    deepCopy.splice(targetIndex + 1, 0, questionDupe);
    return deepCopy;
}

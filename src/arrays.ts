/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const len: number = numbers.length;
    if (len === 0) {
        const len0: number[] = [];
        return len0;
    } else if (len === 1) {
        const len1: number[] = [...numbers, ...numbers];
        return len1;
    } else {
        const len2: number[] = [numbers[0], numbers[len - 1]];
        return len2;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const nums = numbers.map((str: string): number =>
        parseInt(str) ? parseInt(str) : 0
    );
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeDollar = amounts.map((str: string): string =>
        str.charAt(0) === "$" ? str.replace("$", "") : str
    );
    const nums = removeDollar.map((str: string): number =>
        parseInt(str) ? parseInt(str) : 0
    );
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeExclamation = messages.map((str: string): string =>
        str.charAt(str.length - 1) === "!" ? str.toUpperCase() : str
    );
    const removeQuestion = removeExclamation.filter(
        (str: string): boolean => str.charAt(str.length - 1) !== "?"
    );
    return removeQuestion;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = 0;
    words.map((str: string): number => (str.length < 4 ? ++count : 0));
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const len: number = colors.length;
    if (len === 0) {
        return true;
    }
    let count = 0;
    colors.map((str: string): number =>
        str === "red" || str === "blue" || str === "green" ? ++count : 0
    );
    if (count === len) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum = 0;
    if (addends.length === 0) {
        return "0=0";
    }
    const str: string[] = [];
    addends.map((val: number): number => (sum += val));
    str[0] = sum.toString() + "=";
    str[1] = addends.join("+");
    return str.toString().replace(",", "");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0;
    let sum2 = 0;
    const negativeIndex = values.findIndex((num: number): boolean => num < 0);
    console.log(negativeIndex);
    if (negativeIndex === -1) {
        values.map((num: number): number => (sum += num));
        const final = [...values, sum];
        console.log(final);
        return final;
    }
    values.map((val: number): number =>
        val > 0 ? (sum += val) : (sum2 = sum)
    );
    const valuesCopy = [...values];
    valuesCopy.splice(negativeIndex + 1, 0, sum2);
    return valuesCopy;
}

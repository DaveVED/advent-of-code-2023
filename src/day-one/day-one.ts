import { readTextFile } from '../util/util';

export const wordToNumberMapping: Record<string, string> = {
    one: 'one1one',
    two: 'two2two',
    three: 'three3three',
    four: 'four4four',
    five: 'five5five',
    six: 'six6six',
    seven: 'seven7seven',
    eight: 'eight8eight',
    nine: 'nine9nine',
};

export const matchFirstAndLastNumber = (line: string): string[] => {
    const digits = line.replace(/[^0-9]/g, '');
    return [digits[0] || '0', digits[digits.length - 1] || digits[0] || '0'];
};

export const maskNumberedWords = (input: string) => {
    for (const word in wordToNumberMapping) {
        const replacement = wordToNumberMapping[word];
        input = input.replaceAll(word, replacement);
    }

    return input;
};

export const calculateCalibrationValue = (calibrationDocument: string[]) => {
    let total = 0;
    for (const line of calibrationDocument) {
        const maskedLine = maskNumberedWords(line);
        const [first, last] = matchFirstAndLastNumber(maskedLine);
        const value = Number(first + last);
        total += value;
    }
    return total;
};

export const solveDayOne = (filePath: string): number => {
    const input = readTextFile(filePath);
    return calculateCalibrationValue(input);
};

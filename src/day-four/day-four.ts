import { readTextFile } from '../util/util';

interface NumbersResult {
    drawNumbers: Set<string>;
    ourNumbers: string[];
}

const countMatches = (
    drawNumbers: Set<string>,
    ourNumbers: string[]
): number => {
    return ourNumbers.filter((number) => drawNumbers.has(number)).length;
};

const parseCard = (line: string): NumbersResult => {
    const [drawNums, ourNums] = line
        .split('|')
        .map((part) => part.trim().split(/\s+/));
    return { drawNumbers: new Set(drawNums), ourNumbers: ourNums };
};

const processCard = (
    line: string,
    index: number,
    cardCounts: number[]
): void => {
    const { drawNumbers, ourNumbers } = parseCard(line);
    const matches = countMatches(drawNumbers, ourNumbers);
    cardCounts[index]++;
    propagateCount(index, matches, cardCounts);
};

const propagateCount = (
    index: number,
    matches: number,
    cardCounts: number[]
): void => {
    for (let i = 1; i <= matches; i++) {
        const nextCardIndex = index + i;
        if (nextCardIndex < cardCounts.length) {
            cardCounts[nextCardIndex] += cardCounts[index];
        }
    }
};

const sumCounts = (cardCounts: number[]): number => {
    return cardCounts.reduce((acc, count) => acc + count, 0);
};

export const solveDayFour = (filePath: string): number => {
    const lines = readTextFile(filePath);
    const cardCounts = Array(lines.length).fill(0);
    lines.forEach((line, index) => processCard(line, index, cardCounts));
    return sumCounts(cardCounts);
};

import { readTextFile } from '../util/util';

export type Grid = string[][];
export type AdjacencyList = Map<string, string[]>;

export const getGrid = (schematic: string[]): Grid =>
    schematic.map((line) => line.split(''));

export const findNumbers = (grid: Grid): AdjacencyList => {
    const adj: AdjacencyList = new Map();
    const numberRegex = /\d+/g; // Regular expression to match numbers

    grid.forEach((line, i) => {
        let match;
        const lineStr = line.join('');
        while ((match = numberRegex.exec(lineStr)) !== null) {
            const number = match[0];
            const startIdx = match.index;
            const endIdx = startIdx + number.length - 1;

            const idxs = [
                [i, startIdx - 1],
                [i, endIdx + 1],
            ];
            for (let j = startIdx - 1; j <= endIdx + 1; j++) {
                idxs.push([i - 1, j], [i + 1, j]);
            }

            idxs.forEach(([a, b]) => {
                if (
                    a >= 0 &&
                    a < grid.length &&
                    b >= 0 &&
                    b < grid[a].length &&
                    grid[a][b] === '*'
                ) {
                    const key = `${a},${b}`;
                    if (!adj.has(key)) {
                        adj.set(key, []);
                    }
                    adj.get(key)?.push(number); // Safe navigation with '?'
                }
            });
        }
    });

    return adj;
};

export const sumGearRatios = (schematic: string[]): number => {
    const grid = getGrid(schematic);
    const adj = findNumbers(grid);
    return Array.from(adj.values())
        .filter((numbers) => numbers.length === 2)
        .reduce(
            (acc, [num1, num2]) => acc + parseInt(num1) * parseInt(num2),
            0
        );
};

export const solveDayThree = (filePath: string) => {
    const input = readTextFile(filePath);
    const totalGearRatioSum = sumGearRatios(input);
    return totalGearRatioSum;
};

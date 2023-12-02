import { readTextFile } from '../util/util';

export interface Cubes {
    red: number;
    blue: number;
    green: number;
    [key: string]: number;
}

export const extractCubes = (input: string): Cubes => {
    const game = input.split(';');
    const cubes: Cubes = { red: 0, blue: 0, green: 0 };

    for (const draw of game) {
        const cubesArr = draw.split(',');
        const drawCounts: Cubes = { red: 0, blue: 0, green: 0 };

        for (const cubeStr of cubesArr) {
            const [countStr, color] = cubeStr.trim().split(' ');
            const count = parseInt(countStr, 10);

            if (color in drawCounts) {
                drawCounts[color.toLowerCase()] += count;
            }
        }

        // Update the maximum count for each color
        cubes.red = Math.max(cubes.red, drawCounts.red);
        cubes.blue = Math.max(cubes.blue, drawCounts.blue);
        cubes.green = Math.max(cubes.green, drawCounts.green);
    }

    return cubes;
};

export const calculatePower = (cubes: Cubes): number => {
    return cubes.red * cubes.green * cubes.blue;
};

export const sumPowersOfGames = (games: string[]): number => {
    return games.reduce((totalPower, game) => {
        const gameOutcomeParts = game.split(':')[1];
        const cubeTotals = extractCubes(gameOutcomeParts);
        return totalPower + calculatePower(cubeTotals);
    }, 0);
};

export const solveDayTwo = (filePath: string): number => {
    const input = readTextFile(filePath);
    return sumPowersOfGames(input);
};

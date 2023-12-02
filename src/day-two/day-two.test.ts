import { readTextFile } from '../util/util';
import {
    extractCubes,
    calculatePower,
    sumPowersOfGames,
    solveDayTwo,
} from './day-two';

describe('Day One Tests', () => {
    describe('extractCubes', () => {
        it('can extract cubes from string input', () => {
            expect(
                extractCubes('3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
            ).toEqual({ red: 4, blue: 6, green: 2 });
            expect(
                extractCubes(
                    '1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
                )
            ).toEqual({ red: 1, blue: 4, green: 3 });
            expect(
                extractCubes(
                    '8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
                )
            ).toEqual({ red: 20, blue: 6, green: 13 });
            expect(
                extractCubes(
                    '1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
                )
            ).toEqual({ red: 14, blue: 15, green: 3 });
            expect(
                extractCubes('6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green')
            ).toEqual({ red: 6, blue: 2, green: 3 });
        });
    });

    describe('calculatePower', () => {
        it('calculates the power of a set of cubes', () => {
            expect(calculatePower({ red: 4, blue: 6, green: 2 })).toBe(48);
            expect(calculatePower({ red: 1, blue: 4, green: 3 })).toBe(12);
            expect(calculatePower({ red: 20, blue: 6, green: 13 })).toBe(1560);
            expect(calculatePower({ red: 14, blue: 15, green: 3 })).toBe(630);
            expect(calculatePower({ red: 6, blue: 2, green: 3 })).toBe(36);
        });
    });

    describe('sumPowersOfGames', () => {
        it('calculates the total power of all games', () => {
            const games = readTextFile('./src/day-two/inputs/puzzle-input.txt');
            expect(sumPowersOfGames(games)).toBe(72513); // Adjust this value based on actual input
        });
    });

    describe('solveDayTwo', () => {
        it('reads in file and calculates the total power of all games', () => {
            expect(solveDayTwo('./src/day-two/inputs/puzzle-input.txt')).toBe(
                72513
            ); // Adjust this value based on actual input
        });
    });
});

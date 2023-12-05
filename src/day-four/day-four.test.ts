import { solveDayFour } from './day-four';

describe('Day Three Tests', () => {
    describe('solveDayFour', () => {
        it('reads in file and calculates the total sum of all gears', () => {
            expect(solveDayFour('./src/day-four/inputs/puzzle-input.txt')).toBe(
                9425061
            );
        });
    });
});

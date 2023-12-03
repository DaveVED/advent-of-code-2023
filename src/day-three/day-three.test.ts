import { solveDayThree } from './day-three';

describe('Day Three Tests', () => {
    describe('solveDayThree', () => {
        it('reads in file and calculates the total sum of all gears', () => {
            expect(
                solveDayThree('./src/day-three/inputs/puzzle-input.txt')
            ).toBe(87263515);
        });
    });
});

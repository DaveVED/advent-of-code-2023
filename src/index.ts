import { solveDayOne } from './day-one/day-one';
import { solveDayTwo } from './day-two/day-two';
import { solveDayThree } from './day-three/day-three';

// Day 1
const dayOneFilePath = './src/day-one/inputs/puzzle-input.txt';
const dayOneAnswer: number = solveDayOne(dayOneFilePath);
console.log(`Day ONE answer is: ${dayOneAnswer}`);

// Day 2
const dayTwoFilePath = './src/day-two/inputs/puzzle-input.txt';
const dayTwoAnswer: number = solveDayTwo(dayTwoFilePath);
console.log(`Day TWO answer is: ${dayTwoAnswer}`);

// Day 3
const dayThreeFilePath = './src/day-three/inputs/puzzle-input.txt';
const dayThreeAnswer = solveDayThree(dayThreeFilePath);
console.log(`Day THREE answer is: ${dayThreeAnswer}`);

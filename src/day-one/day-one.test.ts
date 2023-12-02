import { readTextFile } from '../util/util';
import {
    calculateCalibrationValue,
    maskNumberedWords,
    matchFirstAndLastNumber,
    solveDayOne,
} from './day-one';

describe('Day One Tests', () => {
    describe('maskNumberedWords', () => {
        it('can parse strings with numbers as words', () => {
            expect(
                maskNumberedWords('fngf62four4fourfive5fivetwo2twothree3three')
            ).toEqual(
                'fngf62four4four4four4fourfive5five5five5fivetwo2two2two2twothree3three3three3three'
            );
            expect(maskNumberedWords('sevengcf128btrnrtgbmj3mtzv')).toEqual(
                'seven7sevengcf128btrnrtgbmj3mtzv'
            );
            expect(maskNumberedWords('sstdseven3twobrfour3zthzhtkmc2')).toEqual(
                'sstdseven7seven3two2twobrfour4four3zthzhtkmc2'
            );
            expect(maskNumberedWords('8two8')).toEqual('8two2two8');
            expect(
                maskNumberedWords('nineone7qzdcglxjtkchjfpqrdfive6nine')
            ).toEqual('nine9nineone1one7qzdcglxjtkchjfpqrdfive5five6nine9nine');
            expect(maskNumberedWords('')).toEqual('');
            expect(
                maskNumberedWords('3onefqltjzdrfourcpkfhceightwomc')
            ).toEqual('3one1onefqltjzdrfour4fourcpkfhceight8eightwo2twomc');
        });
    });

    describe('matchFirstAndLastNumber', () => {
        it('can match first and last number', () => {
            expect(
                matchFirstAndLastNumber(
                    'fngf62four4fourfive5fivetwo2twothree3three'
                )
            ).toEqual(['6', '3']);
            expect(
                matchFirstAndLastNumber('seven7sevengcf128btrnrtgbmj3mtzv')
            ).toEqual(['7', '3']);
            expect(
                matchFirstAndLastNumber(
                    'sstdseven7seven3two2twobrfour4four3zthzhtkmc2'
                )
            ).toEqual(['7', '2']);
            expect(matchFirstAndLastNumber('8two2two8')).toEqual(['8', '8']);
            expect(
                matchFirstAndLastNumber(
                    'nine9nineone1one7qzdcglxjtkchjfpqrdfive5five6nine9nine'
                )
            ).toEqual(['9', '9']);
            expect(matchFirstAndLastNumber('')).toEqual(['0', '0']);
            expect(
                matchFirstAndLastNumber(
                    '3one1onefqltjzdrfour4fourcpkfhceight8eightwo2twomc'
                )
            ).toEqual(['3', '2']);
        });
    });

    describe('calculateCalibrationValue', () => {
        it('can find the total calibrationValue', () => {
            const input = readTextFile(
                './src/day-one/inputs/part-two-example.txt'
            );
            const calibrationValue = calculateCalibrationValue(input);
            expect(calibrationValue).toBe(281);
        });
    });

    describe('solveDayOne', () => {
        const dayOneOutput = solveDayOne(
            './src/day-one/inputs/puzzle-input.txt'
        );
        expect(dayOneOutput).toBe(55260);
    });
});

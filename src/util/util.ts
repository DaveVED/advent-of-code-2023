import * as fs from 'fs';

export const readTextFile = (filePath: string): string[] => {
    const fileContent = fs.readFileSync(filePath).toString();
    return fileContent.split('\n');
};

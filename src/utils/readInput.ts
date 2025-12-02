import { readFileSync } from 'fs';

export interface InputOptions {
  year: string;
  day: string;
  useTestInput?: boolean;
}

/**
 * Reads the input file for the current puzzle.
 * 
 * Usage:
 * ```typescript
 * import { readInput } from '../../utils/readInput.js';
 * const input = readInput({ year: '2025', day: '1', useTestInput });
 * ```
 */
export function readInput(options: InputOptions): string {
  const { year, day, useTestInput = false } = options;
  const paddedDay = day.padStart(2, '0');
  const inputFileName = useTestInput ? 'input-test.txt' : 'input.txt';
  const inputPath = `src/${year}/day${paddedDay}/${inputFileName}`;
  
  try {
    return readFileSync(inputPath, 'utf-8').trim();
  } catch (error) {
    throw new Error(`Failed to read input file: ${inputPath}`);
  }
}

/**
 * Reads the input file and splits it into lines.
 * 
 * Usage:
 * ```typescript
 * import { readInputLines } from '../../utils/readInput.js';
 * const lines = readInputLines({ year: '2025', day: '1', useTestInput });
 * ```
 */
export function readInputLines(options: InputOptions): string[] {
  return readInput(options).split('\n');
}

import { readInputLines } from '../../utils/readInput.js';

export default async function run(useTestInput: boolean = false) {
  console.log(`Running Advent of Code 2025, Day 1, Part 1${useTestInput ? ' (test)' : ''}`);
  const lines = readInputLines({ year: '2025', day: '1', useTestInput });

  let zeroPositions = 0;
  let position = 50;
  for (const line of lines) {
      const direction = line[0];
      const steps = parseInt(line.slice(1));
      if (direction === 'L') {
          position -= steps;
      } else {
          position += steps;
      }

      position = (position + 100) % 100;

      if(position === 0) {
          zeroPositions++;
      }
  }
  console.log('Result 2025-1-1: ', zeroPositions);
}


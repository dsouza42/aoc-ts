import { readInputLines } from '../../utils/readInput.js';

export default async function run(useTestInput: boolean = false) {
  console.log(`Running Advent of Code 2025, Day 1, Part 2${useTestInput ? ' (test)' : ''}`);
  const lines = readInputLines({ year: '2025', day: '1', useTestInput });

  let zeroPositions = 0;
  let position = 50;
  for (const line of lines) {
      const direction = line[0];
      let steps = parseInt(line.slice(1));
      const previousPosition = position;
      if (direction === 'L') {
          steps *= -1;
      }
      zeroPositions += Math.floor(Math.abs(steps / 100));
      steps = steps % 100;
      position = (((position + steps) % 100) + 100) % 100;

      if(position === 0
        || (position !== 0 && previousPosition !== 0 
          && ((steps > 0 && (100-previousPosition) < steps) || (steps < 0 && previousPosition < -steps)))) {
        zeroPositions++;
      }
  }
  console.log('Result 2025-1-2: ', zeroPositions);
}

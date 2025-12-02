const args = process.argv.slice(2).map(arg => arg.trim());
const [year, day, part, testFlag] = args;

if (!year || !day || !part) {
  console.error('Usage: npm run dev <year> <day> <part> [t]');
  console.error('Example: npm run dev 2025 1 2');
  console.error('Example: npm run dev 2025 1 2 t');
  process.exit(1);
}

const useTestInput = testFlag === 't';
const paddedDay = day.padStart(2, '0');
const solutionPath = `./${year}/day${paddedDay}/part${part}.ts`;

try {
  const solution = await import(solutionPath);
  if (typeof solution.default === 'function') {
    await solution.default(useTestInput);
  } else if (typeof solution.run === 'function') {
    await solution.run(useTestInput);
  } else {
    console.error(`Solution file ${solutionPath} must export a default function or a 'run' function`);
    process.exit(1);
  }
} catch (error) {
  if ((error as NodeJS.ErrnoException).code === 'ERR_MODULE_NOT_FOUND') {
    console.error(`Solution not found: ${solutionPath}`);
    console.error(`Expected file: src/${year}/day${paddedDay}/part${part}.ts`);
  } else {
    console.error('Error running solution:', error);
  }
  process.exit(1);
}

export {};

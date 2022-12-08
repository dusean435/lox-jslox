import Lox from './lox/Lox';


if (process.argv.length > 3) {
  console.log(`Usage: ${process.argv[1]} [script]}`);
  process.exit(64);
} else if (process.argv.length == 3) {
  Lox.runFile(process.argv[2]);
} else {
  Lox.runPrompt();
}

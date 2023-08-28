const chalk = require('chalk');

const heisenberg = require('./dataClosures');

const ifrit = require('./dataClosures');

console.log(chalk.blue('Hello, Node.js!'));

heisenberg.showScore();

// ifrit.increment();
// ifrit.increment();
// ifrit.showScore();

heisenberg.decrement();
heisenberg.sayMyName();
heisenberg.showScore();

ifrit.decrement();
console.log(`${ifrit.sayMyName()}'s score now is: ${ifrit.showScore()}`);

console.log(__filename);

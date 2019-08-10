import readlineSync from 'readline-sync';
import rand from './rand';
import hello from '.';

const parity = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = hello();
  for (let i = 1; i < 4; i += 1) {
    const number = rand(100);
    const answer = readlineSync.question(`Question ${number}\nYour answer: `);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
  return undefined;
};

export default parity;

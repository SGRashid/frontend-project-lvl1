import readlineSync from 'readline-sync';
import rand from './rand';
import hello from '.';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
  const name = hello();
  for (let i = 1; i < 4; i += 1) {
    const number1 = rand(100);
    const number2 = rand(100);
    let operation = '';
    let correctAnswer = 0;
    const operationChoice = rand(3);

    switch (operationChoice) {
      case 1:
        operation = '+';
        correctAnswer = number1 + number2;
        break;
      case 2:
        operation = '-';
        correctAnswer = number1 - number2;
        break;
      case 3:
        operation = '*';
        correctAnswer = number1 * number2;
        break;
      default:
        break;
    }
    // Cheat
    // console.log(`Correct answer: ${correctAnswer}`);

    console.log(`Question: ${number1} ${operation} ${number2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log(`correctAnswer ${correctAnswer}`);
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
  return undefined;
};

export default calc;

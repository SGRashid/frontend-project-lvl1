import readlineSync from 'readline-sync';
import rand from './rand';
import hello from '.';

const progression = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
  const name = hello();

  for (let i = 1; i < 4; i += 1) {
    const xNumber = rand(10);
    let correctAnswer;
    const a1 = rand(10);
    const d = rand(10);
    const question = [];
    for (let n = 1; n <= 10; n += 1) {
      if (n === xNumber) {
        question.push('... ');
        correctAnswer = String(a1 + (n - 1) * d);
      } else {
        question.push(`${String(a1 + (n - 1) * d)} `);
      }
    }

    console.log(`Question: ${question.join('')}`);
    // Cheat
    console.log(`Правильный ответ ${correctAnswer}`);
    const answer = readlineSync.question('You answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
      return false;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
  return undefined;
};

export default progression;

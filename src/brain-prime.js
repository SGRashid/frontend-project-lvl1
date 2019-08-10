import readlineSync from 'readline-sync';
import rand from './rand';
import hello from '.';

// Проверка простое ли число. Будет нужно в prime

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) { return false; }
  }
  return true;
};


const prime = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
  const name = hello();

  for (let i = 1; i < 4; i += 1) {
    const randNum = rand(100);
    const correctAnswer = isPrime(randNum) ? 'yes' : 'no';
    console.log(`Question: ${randNum}`);
    // Cheat
    // console.log(`Правильный ответ ${correctAnswer}`);
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

export default prime;

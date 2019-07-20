import readlineSync from 'readline-sync';
import rand from './rand';
import hello from '.';

//Нахождение наибольшего общего делителя. Будет нужно в gcd

const bigestDivider = (num1, num2) => {
  if (num1 === num2){return num1}
  let i = num1 > num2 ? num2 : num1;
  for (i; i > 0; i -= 1){
    if(num1 % i === 0 && num2 % i === 0){return i}
  }
}

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
  let name = hello();

  for (let i = 1; i < 4; i += 1){
    const number1 = rand(100);
    const number2 = rand(100);
    const correctAnswer = String(bigestDivider(number1, number2));
    console.log(`Question: ${number1} ${number2}`);
    //Cheat
    //console.log(`Правильный ответ ${correctAnswer}`);
    let answer = readlineSync.question('You answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
      return false;
      }
    console.log(`Correct!`);
  }

  console.log(`Congratulations, ${name}!`);
  
  
}

export default gcd;
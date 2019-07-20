import readlineSync from 'readline-sync';
import rand from './rand';
import hello from '.';

const parity = () => {

	console.log('Welcome to the Brain Games!');
  	console.log('Find the greatest common divisor of given numbers.\n');
  	let name = hello();

	for (let i = 1; i < 4; i += 1) {
	let number = rand(100);
	let answer = readlineSync.question(`Question ${number}\nYour answer: `);
	let correctAnswer = number % 2 === 0 ? 'yes' : 'no';
	if (correctAnswer !== answer) {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
		return false;
	}
	else {console.log('Correct!');}
	}
	console.log(`Congratulations, ${name}!`);
}	

export default parity;
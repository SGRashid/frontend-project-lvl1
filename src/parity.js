import readlineSync from 'readline-sync';

const parity = (name) => {

	for (let i = 1; i < 4; i += 1) {
	let number = Math.floor(Math.random() * 100 + 1);
	let answer = readlineSync.question(`Question ${number}\nYour answer: `);
	let correctAnswer = number % 2 === 0 ? 'yes' : 'no';
	if (correctAnswer !== Number(answer)) {
		console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`);
		return false;
	}
	else {console.log('Correct!');}
	}
	console.log(`Congratulations, ${name}!`);
}	

export default parity;
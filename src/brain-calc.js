import readlineSync from 'readline-sync';

const rand = () => Math.floor(Math.random() * 100 + 1);

const calc = (name) => {
	//console.log('>>>>>>>>>>>>>>>>>>>>' + name);
	for (let i = 1; i < 4; i += 1){
		const number1 = rand();
		const number2 = rand();
		let operation = '';
		let correctAnswer = 0;
		const operationChoice = rand();

		if (operationChoice <= 33) {
			operation = "+";
			correctAnswer = number1 + number2;
		} else if (operationChoice <= 66) {
			operation = "-";
			correctAnswer = number1 - number2;
		} else {
			operation = "*";
			correctAnswer = number1 * number2;
		}

		console.log(`Question: ${number1} ${operation} ${number2}`);
		let answer = readlineSync.question('Your answer: ');
		if (answer !== correctAnswer) {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
			console.log(`Let's try again, ${name}!`);
			return false;
		}
		//console.log(`correctAnswer ${correctAnswer}`);
		console.log('Correct!');
		
	}

	console.log(`Congratulations, ${name}!`);
}

export default calc;
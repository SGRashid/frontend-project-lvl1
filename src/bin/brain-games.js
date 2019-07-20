#!/usr/bin/env node
import readlineSync from 'readline-sync';
import parity from '../parity';
import calc from '../brain-calc';
import gcd from '../brain-gcd';


const selectGame = () => {
  console.log("Select game:");
  console.log('1 - brain-calc');
  console.log('2 - brain-parity');
  console.log("3 - brain-gcd");
  //console.log("2 - brain-progression");
  //console.log("3 - brain-prime");
  console.log("");
  let select = readlineSync.question('>> ');
  switch (select) {
    case '1':
    	calc();
    	break;
    case '2':
    	parity();
    	break;
    case '3':
      gcd();
      break;
      /*
    case "2":
      progression();
      break;
    case "3":
      prime();
      break;
    */
    default:
    console.log("Incorrect number");
    selectGame();
  }
}

selectGame();
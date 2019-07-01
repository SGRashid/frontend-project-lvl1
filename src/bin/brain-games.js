#!/usr/bin/env node
import readlineSync from 'readline-sync';
import hello from '../index';
import parity from '../parity';
import calc from '../brain-calc';

console.log('Welcome to the Brain Games!');
let name = readlineSync.question('May I have your name? ');
hello(name);
//parity(name);
calc(name);

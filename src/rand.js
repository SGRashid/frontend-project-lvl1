//Генератор случайных чисел, который потом будет везде использоваться

const rand = (n) => {
  return Math.floor(Math.random()*n +1);
}

export default rand;
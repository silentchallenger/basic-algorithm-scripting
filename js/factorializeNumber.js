function factorialize(num) {
  let number = 1;
  for (let i = 1; i <= num; i++) {
    number = number * i;
  }
  num = number;
  console.log(num);
  return num;
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
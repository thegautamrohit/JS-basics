function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence();
//   console.log(generator);

//   let one = generator.next();
//   console.log(one);

for (let value of generator) {
  console.log(value); // 1, then 2,
} //it doesn't return 3 because for of loop ignore the return statement

function closure() {
  let x = 0;

  return function () {
    return ++x;
  };
}

let close = closure();

console.log(close());
console.log(close());
console.log(close());
console.log(close());
console.log(close());
console.log(close());
console.log(close());


let closeNew = closure()

console.log(closeNew());
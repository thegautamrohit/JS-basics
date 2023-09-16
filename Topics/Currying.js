// function multiply(a, b, c) {
//   return a * b * c;
// }

// console.log(multiply(2, 3, 4));

function multiplyCurry(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyTwo = multiply(2);
console.log(multiplyTwo(5));

// console.log(multiplyCurry(2)(4)(3));

//<<<<<<<<<<<<<<<<<<< USING "bind" METHOD>>>>>>>>>>>>>>>>>>>>//

function multiplyNew(x, y) {
  return x * y;
}

const multiplyByTwo = multiplyNew.bind(this, 2);

const multiplyByThree = multiplyNew.bind(this, 3);

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));

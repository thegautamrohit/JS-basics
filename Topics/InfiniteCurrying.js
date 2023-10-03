function sum(a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }

    return a;
  };
}

// console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());

let arr = [1, 2, 2, 3, 4, 5, 3, 4, 5, 3, 4];

// console.log(new Set(arr));

let frequency = arr.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = acc[curr] + 1;
  } else {
    acc[curr] = 1;
  }

  return acc;
}, {});

// console.log(frequency);

let unique = arr.reduce((acc, curr) => {
  if (!acc?.includes(curr)) {
    acc.push(curr);
  }

  return acc;
}, []);

console.log(unique);

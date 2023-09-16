function closure() {
  let x = 0;

  return function () {
    return ++x;
  };
}

// let close = closure();

// console.log(close());
// console.log(close());
// console.log(close());
// console.log(close());
// console.log(close());
// console.log(close());
// console.log(close());

// let closeNew = closure();

// console.log(closeNew());

function printNum() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// printNum();




//USING "var"_______________________________________________//

function printNew() {
  for (var i = 0; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}

printNew();

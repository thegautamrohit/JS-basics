// const throttleFunction = (func, delay) => {
//   // Previously called time of the function
//   let prev = 0;
//   return (...args) => {
//     // Current called time of the function
//     let now = new Date().getTime();

//     // Logging the difference between previously
//     // called and current called timings
//     // console.log(now - prev, delay);

//     // If difference is greater than delay call
//     // the function again.
//     if (now - prev > delay) {
//       prev = now;

//       // "..." is the spread operator here
//       // returning the function with the
//       // array of arguments
//       return func(...args);
//     }
//   };
// };

const throttleFunction = (f, t) => {
  let prev = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > t) {
      f(...args);
      prev = now;
    }
  };
};

window.addEventListener(
  "click",
  throttleFunction(() => {
    console.log("button is clicked");
  }, 1500)
);
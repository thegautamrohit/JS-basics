// function debounce(fn, t) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, t);
//   };
// }

let c = 0;
const print = () => {
  console.log("Clicked" + " " + ++c);
};

const debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const optimisedFunction = debounce(print, 1000);

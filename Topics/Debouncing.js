function debounce(fn, t) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, t);
  };
}

let c = 0;
const print = () => {
  console.log("Clicked" + " " + ++c);
};

const optimisedFunction = debounce(print, 1000);

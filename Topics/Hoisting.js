var x = 7;

function getName() {
  console.log("HOISTING");
}

getName();
console.log(x);
console.log(getName);


//JS will define the var in the global space as undefined even before the code starts executing
// But the function gets stored  as a complete function in that phase that's why we can access if before the initialisation
// This is what we call as hoistiing
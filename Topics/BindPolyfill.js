const data = {
  firstName: "Rohit",
  lastName: "Gautam",
};

function printDetail(city, age) {
  //   console.log(city, age);
  console.log(this.firstName + " " + this.lastName + " " + city + " " + age);
}

// // const bind = printDetail.bind(data);
// // bind();

// Function.prototype.myBind = function (...args) {
//   let obj = this;

//   console.log(args);
//   return function (...args2) {
//     obj.call(...args, ...args2);
//   };
// };

// const newBind = printDetail.myBind(data, "Delhi");

// console.log(newBind(26));

const bindedData = printDetail.bind(data);

// bindedData();

Function.prototype.myBind = function (...args) {
  let scope = this;
  console.log(scope, args);
  return function (...args2) {
    scope.call(...args, ...args2);
  };
};

const customBind = printDetail.myBind(data, 'Delhi');

customBind(26);

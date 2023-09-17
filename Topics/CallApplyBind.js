function printFullName(city, age) {
  console.log(this.firstName + " " + this.lastName + " " + city + " " + age);
}

let data = {
  firstName: "Rohit",
  lastName: "Gautam",
};

printFullName.call(data, "Delhi", 24);

printFullName.apply(data, ["Delhi", 23]);


const bind = printFullName.bind(data ,  "Delhi", 23 )

bind()
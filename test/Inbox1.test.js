const ganache = require("ganache");
const { Web3 } = require("web3");
const assert = require("assert");
// Why is Spell The Web3 with a capital W? :- because we are importing a class from the web3 library and classes are usually capitalized in JavaScript (convention)
const web3 = new Web3(ganache.provider());
// updated ganache and web3 imports added for convenience

// contract test code will go here

// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

// /*

// // Mocha test code will go here
// // There is no intrinsic link between the string and the class, but it is a good practice to name the string the same as the class
// describe("Car", () => {
//   it("can park", () => {
//     const car = new Car();
//     assert.equal(car.park(), "stooopped");
//   });

//   it("can drive", () => {
//     const car = new Car();
//     assert.equal(car.drive(), "vroom");
//   });
// });

// */

// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe("Car", () => {
//   it("can park", () => {
//     // const car = new Car();
//     assert.equal(car.park(), "stopped");
//   });

//   it("can drive", () => {
//     // const car = new Car();
//     assert.equal(car.drive(), "vroom");
//   });
// });

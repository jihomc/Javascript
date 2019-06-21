"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
// WITHOUT export{}: error: [ts] cannot redeclare block-scoped variable message
// because the file is treated as a script, not as a module
// modules have their own scope, but scripts share global scope
// automatically re-compile the file after a changed has saved
// terminal: tsc ts_tutorial --watch
// then open a new terminal and run ts_tutorial.js to run
// Variable Declarations
// let vs const
// let can be declared without initialization
// const declarations must always be initialized with a value
// const declarations, once assigned, cannot be re-assigned
// Variable Types
var isBeginner = true;
var total = 0;
var name = 'Mike';
var sentence = "My name is " + name + "\n    I am a beginner in Typescript";
console.log(sentence);
// Static Type Checking - helps you prevent mistakes
// name = true; error: Type 'true' is not assignable to Type 'String'
// Intellisense: only possible because we have types assigned to variables
// total. suggestions are only related to a numeric type
// name. suggestions are only related to a string type
// null and undefined types available in Typescript
// classified as subtypes: you can assign a value of null or undefined 
// to number, boolean, and string typed variable
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Array Types
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Array that contains values of mixed types
// TS provides tuple type
// the order of the types has to match, can't swap values like [22, 'Chris']
var person1 = ['Chris', 22];
// Enum Type
// A way of giving friendly name to a set of number values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// output: 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 6] = "Green";
    Color2[Color2["Blue"] = 7] = "Blue";
})(Color2 || (Color2 = {}));
;
var d = Color2.Green;
console.log(d);
// output: 6
// Any Type
// if expecting a value from a 3rd party, or user input for example
// Encompasses values of every possible type
// Doesn't force checking before we call, construct, or access properties on values
var randomValue = 10;
// TS does not throw an error in any of the below statements 
// because my variable is of type any
randomValue = true;
randomValue = 'Mike';
console.log(randomValue.name);
randomValue();
randomValue.toUpperCase();
// Unknown Type
// Any value is assignable to Type Unkown, but you can't access any
// properties of an unknown type, nor can you call or construct them
var myVariable = 10;
// we get errors right away
// to get rid of errors, use a Type Assertion to let the system know
// function parameter object of type any
// return object that has name property as string
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// saying myVariable should be treated as a string and then apply method
myVariable.toUpperCase();
// Type Inference
var a;
a = 10;
a = true;
var b = 20;
// b = true; 
// Type 'true' is not assignable to type 'number'
// TS inferred the type of variable b in this instance
// Why specify it at all then? 
// type inference does not work on variable a where there is no initialization
// Union Types
// for same variable, union types restrict to the specified types
// multiType. intellisense support
// no intellisense support for any type
var multiType;
multiType = 20;
multiType = true;
// Functions
var anyType;
anyType = 20;
// a function in JS
// function add(num1, num2) {
//     return num1 + num2;
// }
// TS we can specify types for function parameters
// can explicity specify return number - after parameters: number
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5, '10'); 
//Argument of type '"10"' is not assignable to parameter of type 'number'
// intellisense support add(), also tells you return type is number
// Optional Parameters & Default Parameters
// in TS, every parameter is assumed to be required by the function
// if you call a function without a paramter, it throws an error
// in plain JS it will be possible to call function without parameters
// parameters will receive a value of undefined
// To get this functionality in TS, we can add ? to the end of 
// parameters that we want to be optional -- if we want num2 parameter
// to be optional, add ? to end of parameter name -- name2?
function add2(num1, num2) {
    return num1 + num2;
}
add2(5, 10);
add2(5); // second parameter is treated as undefined
// change function definition to handle undefined value
// if num2 is a truthy value
function add3(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add3(5, 10);
add3(5); // second parameter is treated as undefined
// You can have any number of Optional Parameters, but they MUST ALWAYS
// follow the Required Paramters. If needed, change the order of paramters.
// Default Parameters
// Like Optional Parameters with a Set Value instead of Undefined
function add4(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add4(5, 10); // returns 15
add4(5); // also returns 15, num2 is not passed in but takes default value 10
// second parameter is treated as undefined
// Interface
// It is possible to specify an object as a Type in TS
function fullName1(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p1 = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName1(p1);
// function parameter will now be of type person
// the same interface can now be used as a type in multiple functions
// any changes to the Person Type happens in one place
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p2 = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName2(p2);
// function parameter will now be of type person
// the same interface can now be used as a type in multiple functions
// any changes to the Person Type happens in one place
function fullName3(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p3 = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName3(p3);
// classes - objected oriented class approach
// employee class has 3 members
// property employeeName, a constructor, and a method greet
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
// create an instance of employee
var emp1 = new Employee('Mike');
console.log(emp1.employeeName);
emp1.greet();
// create manager class
// instead of repeating the properties of employee in the manger class, we inherit them
// for inheritance we use the extends keyword
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    // this derived class also has a constructor
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// Access Modifiers
// Keywords that set the accessibility of properties and methods in a class
// Public, private, and protected access modifiers
// Public Access Modifiers
// By default, each class member is public
// We can freely access them throughout program
// Can explicity specify employeeName as Public using public keyword
// public employeeName: string;
// Private - it cannot be accessed from outside its containing class
// let emp1 = new Employee('Mike');
// console.log(emp1.employeeName); --error here
// emp1.greet();
// Protected Access Modifiers
// sometimes you want a derived class to have access to the base class 
// properties, but the property should not be accessible outside the classes
// protected employeeName: string;
// outside the base class and derived class will get an error

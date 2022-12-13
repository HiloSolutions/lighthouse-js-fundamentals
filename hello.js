//STEP 1: we declared a function named sayHello that outputs a string to the console
const sayHello = function (name){
  console.log("Hello " + name);
}

//STEP 2: we called/invoked it using the parentheses notation.
sayHello("Lauren");




//return & console.log
const sayHelloToConsole = function (name) {
  console.log("Hello " + name);
}
sayHelloToConsole('John');

const returnSayHello = function (name){
  return "Hello" + name;
}

const greeting = returnSayHello('John');

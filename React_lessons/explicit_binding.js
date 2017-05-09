//Explicit binding
//call, apply and bind

var sayName = function(lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ' ' + lang2 + ' ' + lang3 + '.');
};

var stacey = {
  name: 'Stacey',
  age: 34
};

var languages = ['Javascript', 'Ruby', 'Python']

//call
sayName.call(stacey, languages[0], languages[1], languages[2]); //pass in arguments one by one

//apply
sayName.apply(stacey, languages) //passing in just the array

//bind
var newFunction = sayName.bind(stacey, languages[0], languages[1], languages[2]); //return a brand new function that you can evoke later.
console.log("Hello World");
newFunction();

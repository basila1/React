//new binding
//when a function is invoked with the new keyword, the THIS keyword inside the function is bound to the new object being constructed.
var Animal = function(color, name, type) {
  //creating a brand new object and saving it as this = {}
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = Animal('black and white', 'Zorro', 'Zebra');

//window binding
var sayAge = function() {
  console.log(this.age);
};

var me = {
  age: 24
};

sayAge();
window.age = 24;
sayAge();

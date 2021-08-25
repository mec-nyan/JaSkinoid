// This is one of the ideas for my individual project:
// A 'breakout' like game written in JS
console.log('jaskinoid is fun!');

// Just some random stuff by now
let arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; ++i) {
  console.log(i);
}

class Cat {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  sayHi() {
    return `Hi! I'm ${this.name} and I've got ${this.color} hair!`;
  }

  sayMeow() {
    return "Meow!";
  }
}


var garfield = new Cat("Garfield", "orange");
garfield.sayHi();
garfield.sayMeow();

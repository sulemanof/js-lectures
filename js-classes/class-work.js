//////////////////////////////////
// 1)
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

console.log( rabbit.eats );
// 2)
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype = {};

console.log( rabbit.eats );

// 3)

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log( rabbit.eats );


// 4)

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete rabbit.eats; // (*)

console.log( rabbit.eats );

// 5) 

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

console.log( rabbit.eats );

////////////////////////////////////////////////////
// Rewrite class to prototype style

function Car(name, color, fuel) {
 this.name = name;
 this.color = color;
 this.fuel = fuel;

 const FUEL_PER_KM = 5;

 this.getColor = function() {
   console.log(this.color)
 }

 this.getName = function() {
   console.log(this.name)
 }

 this.getKilometers = function() {
  console.log(this.fuel / FUEL_PER_KM)
 }

}


const bmw = new Car('bmw', 'black', 1000);

bmw.getColor() // 'black
bmw.getName() // 'bmw'
bmw.getKilometers() // 200

/////////////////////////////////////////////////
// What's wrong ??

function Hamster() {}

Hamster.prototype.food = []; // пустой "живот"

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log( speedy.food.length ); // 2
console.log( lazy.food.length ); // 2 (!??)


/////////////////////////////////////////////////
// Inheritance 

// Animal parent class

function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  console.log( this.name + ' бежит, скорость ' + this.speed );
};

Animal.prototype.stop = function() {
  this.speed = 0;
  console.log( this.name + ' стоит' );
};

// Rabbit child class

function Rabbit(name) {
  this.name = name;
  this.speed = 0;
}

Rabbit.prototype.jump = function() {
  this.speed++;
  console.log( this.name + ' прыгает' );
};

var rabbit = new Rabbit('Кроль');

rabbit.run() // <----- ?????

/////////////////////////////////////////////////

// rewrite task above in es6 classes style


/////////////////////////////////////////////////
// find a mistake

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log( "ходит " + this.name );
};

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = Animal.prototype;

Rabbit.prototype.walk = function() {
  console.log( "прыгает! и ходит: " + this.name );
};

//////////////////////////////////////////////////
// find a mistake


function Animal(name) {
  this.name = name;

  this.walk = function() {
    console.log( "ходит " + this.name );
  };

}

function Rabbit(name) {
  Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
  console.log( "прыгает " + this.name );
};

var rabbit = new Rabbit("Кроль");
rabbit.walk();



///////////////////////////////////////////


function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

console.log( rabbit.constructor == Rabbit ); // что выведет?

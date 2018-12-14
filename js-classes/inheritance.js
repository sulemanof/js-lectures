function Car(name, model, year, color, maxSpeed, fuelCapacity, fuelConsumption) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.fuelCapacity = fuelCapacity || 60;
  this.fuelConsumption = fuelConsumption || 10;
}

Car.prototype.getFullName = function() {
  return this.name + ' ' + this.model;
}

Car.prototype.getAge = function() {
  return (new Date).getFullYear() - this.year;
};

Car.prototype.changeColor = function(color) {
  if (color === this.color) {
    alert('Your car already has a ' + color + 'color');
  } else {
    this.color = color;

    alert('Your car color has been changed to ' + color);
  }
};

Car.prototype.calculateWay = function(kilometers, fuel) {
  if (fuel < 10) {
    alert('You need to refuel before your trip');
  }

  var time = kilometers / this.maxSpeed;
  var necessaryFuel = (kilometers / 100) * this.fuelConsumption;

  if (necessaryFuel > this.fuelCapacity) {
    alert('You need to refuel ' + (necessaryFuel - fuel) / this.fuelCapacity + ' times on your road');
  }

  alert('You need ' + time + ' hours to reach the destination');
};

function BMW() {
  Car.apply(this, arguments);
}

BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = BMW;


var myCar = new BMW('BMW', 'M6', 2018, 'cherry', 300);

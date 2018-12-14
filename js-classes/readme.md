To make a homework, please use the [guideline](../homework-guidelines.md)
---

+ create a branch `js-classes` in your project and checkout it
+ create a folder `js-classes`, do your work inside this folder
---
You need to implement a common car factory;
create 3 individual car factories, which inherit from the common;
create an instance from every individual factory (a particular car with your desired options)
---
### implement inheritance in ES5 way
Use ES5 syntax
+ create a file `inheritance-es5.js`
+ create a class `Car` : this function should accept 7 params:  
    + name
    + model
    + year
    + color
    + maxSpeed
    + fuelCapacity - optional parameter, use `60` by default
    + fuelConsumption - optional parameter, use `10` by default
+ implement a common car method `getFullName`, which should return a full name (e.x. name + model)
+ implement a common car method `getAge`, which should return your car age (current year - your car year)
+ implement a common car method `changeColor`, which should do:
    - take a parameter (color);
    - if your car already has the same color, show a message with text (up to you);
    - if not, change the color and show a message about it.
+ implement a common car method `calculateWay`, which should do:
    - take 2 params: `kilometers` and `fuel`;
    - check if `fuel` < 10, show a message about refuel;
    - calculate the time that you need to reach the destination, show message about it;
    - check, if you need to refuel on your road and show a message (how many times you need to refuel)
+ create 3 another class, which should inherit from `Car` class in ES5 way (e.x. `BMW`, `Lexus`, etc. <--- up to you)
+ create class properties, which should refers only to that particular car factory, and should not effect others(
    for example all BMW's would have sunroof, all Lexus's would have climateControl and so on (all properties is up 
    to you)
)
+ create methods, which should refers only to that particular car factory, and should not effect others
+ create at least one instance of each class
+ check your solution in browser console (include your js file in any html)
---
### implement inheritance in ES6 way (use the `class` keyword)
Use ES6 syntax only (`let`, `const`, `arrow functions` and so on)
+ create a file `inheritance-es6.js`
+ do the same steps as in ES5 mode, but in ES6 syntax (use the `extends` and `super` keywords for inheritance)

// 1) შექმენით 3 car ობიექტი, 3-3 Propertyებით

function Cars(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Cars('Toyota', 'Corolla', 2020);
const car2 = new Cars('Honda', 'Civic', 2018);
const car3 = new Cars('Ford', 'Mustang', 2022);

console.log(car1);
console.log(car2);
console.log(car3);

// 2) შექმენით car constructor, ისევ 3 property'ით და ერთ-ერთი property იყოს horsePower, დაუმატეთ ასევე მეთოდი რომელიც ამ ცხენის ძალას გაზრდის 50'ით

function Cars2(make, model, year, horsePower) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.horsePower = horsePower;

    this.increaseHorsePower = function () {
        this.horsePower += 50;
    }
}

const car01 = new Cars2('Toyota', 'Corolla', 2020, 200);
const car02 = new Cars2('Toyota', 'Corolla', 2020, 200);
const car03 = new Cars2('Toyota', 'Corolla', 2020, 200);

console.log(car01);
console.log(car02);
console.log(car03);

car01.increaseHorsePower();
car02.increaseHorsePower();
car03.increaseHorsePower();

console.log(car01.horsePower);
console.log(car02.horsePower);
console.log(car03.horsePower);

// 3) შექმენით array, array literal სახით (5 ელემენტით) 

let Array = [10, 20, 30, 40, 50];
let newArray = new Array(10, 20, 30, 40, 50);

console.log("index 0", Array[0]);
console.log("index 1", Array[3]);

console.log("slice", Array.slice(1, 4));

let forArray = [10, 20, 30, 40, 50];

for (let i = 0; i < forArray.length; i++) {
    console.log(forArray[i]);
}

const forNewArray = new Array(10, 20, 30, 40, 50);

for (let i = 0; i < forNewArray.length; i++) {
    console.log(forNewArray[i]);
}

/*
In JavaScript, associative arrays are not officially supported as a distinct type of array. However, the term is often used to describe 
objects or arrays with non-numeric (string) indices. While standard JavaScript arrays are indexed by integers (e.g., 0, 1, 2, etc.),
associative arrays use string keys to store and access data. This is similar to how objects in JavaScript work, where properties are
accessed using string keys.
*/
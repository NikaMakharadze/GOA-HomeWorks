// 2) შექმენით კომპიუტერის constructor

function Computer(cpu, gpu, ram) {
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
}

const pc1 = new Computer("Intel i7", "NVIDIA RTX 3080", "32GB");
const pc2 = new Computer("AMD Ryzen 5", "AMD Radeon RX 6700", "16GB");
console.log(pc1);
console.log(pc2);


// 3) შექმენით კლავიატურის constructor

function Keyboard(brands, color, type) {
    this.brands = brands;
    this.color = color;
    this.type = type;
}

const keyboard1 = new Keyboard("Logitech", "Black", "Mechanical");
const keyboard2 = new Keyboard("Razer", "White", "Membrane");

console.log(keyboard1);
console.log(keyboard2);

// 4) ახსენით რა არის constructor

/*
ობიექტის კონსტრუქტორი, არის ინსტრუქციები, რომელიც განსაზღვრავს როგორ უნდა შევქმნათ ობიექტი.
new keyword-ი ქმნის ახალ ობიექტს, ხოლო კონსტუქტორის ფუნქცია მასში ამატებს კუთვნილებებს.
*/

// 5) შექმენით 3 array და სამივეს გადაატარეთ for loop

let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd', 'e'];
let array3 = [true, false, true, false];

// Array 1
console.log("Array 1:");
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

// Array 2
console.log("Array 2:");
for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

// Array 3
console.log("Array 3:");
for (let i = 0; i < array3.length; i++) {
    console.log(array3[i]);
}

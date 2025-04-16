// 1)

const p = document.getElementById("my-p");

p.addEventListener("click", function () {
    p.textContent = "Hello JavaScript";
})

// 2)

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    btn.style.fontSize = "20px";
})

// 3) 

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(numbers[0]);
console.log(numbers.at(-1))

// 4)

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    window.location.href = "./index2.html";
})


// 5)

// DOM - Document Object Model(დოკუმენტის ობიექტის მოდელი)

const nums = [1,2,3,4,5];
console.log(nums);
nums.pop(); // pop არის მასივის მეთოდი, რომელიც ცვლის იმავე მასივს(ანუ არ აბრუნებს ახალ მასივს) და შლის მასივის ბოლო ელემენტს

console.log(nums);

nums.shift(); // shift არის მასივის მეთოდი, რომელიც ცვლის იმავე მასივს(ანუ არ აბრუნებს ახალ მასივს) და შლის მასივის პირველ ელემენტს

console.log(nums);

nums.unshift("Nika"); // unshift არის მასივის მეთოდი, რომელიც მასივის დასაწყისში(მე-0 ინდექსზე) ამატებს გადაცემულ ელემენტს/ელემენტებს
console.log(nums);

nums.push("JavaScript") // push არის მასივის მეთოდი, რომელიც მასივის ბოლოში ამატებს გადაცემულ ელემენტს/ელემენტებ
console.log(nums);


// textContent - არის მეთოდი, რომელიც ცვლის html-ის ელემენტის ტექსტის შიტგთავსს

// innerHTML - არის მეთოდი, რომელიც ცვლის html-ის ელემენტის ტექსტის შიგთავსს.
// ის მუშაობს textContent-ის მსგავსად, მაგრამ შეუძლია ჩასვას კონკრეტულ html-ის ელემენტში სხვა html-ის ელემენტები(შეუძლია შეცვლაოს ელემენტის html-ის შიგთავსი)
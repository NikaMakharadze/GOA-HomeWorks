// 2) დეტალურად განიხილეთ განსხვავებები python'ის და js'ის სინტაქსებს შორის

/*

py-ში ფუნქციის შესაქმენალდ ვიყენებთ "def" ხოლო js-ში ვიყენებთ "function"-ს. 
py-ში არგუმენტის შემდეგ აუცილებელია ორი წერტილი და მის ქვემოთ ინტენტაციით დაწერილი კოდი ითვლება ფუნქციად
ხოლო js-ში ვიყენეთ ფიგურულ ფრჩხილებს "{}" და შიგნით დაწერილ კოდს არ სჭირდება ინტენტაციის დაცვა ( მაგრამ კოდის მარტივად წაკითხვისთვის უკეთესია ინტენტაციის დაცვა)
js-ში ვიყენებთ ლეიერის ბოლოს ";" წერტილ მძიმეს 

*/
let age = Number(prompt("Enter Your Age:"));

while (isNaN(age) || age <= 0) {
    age = Number(prompt("Please enter a valid age (must be a number greater than 0):"));
}

console.log("User's age: " + age);

let name = prompt("Enter Your Name:");

console.log("User's name: " + name);

// 5) შექმენით ფუნქცია რომელიც გამოიტანს DOM'ის ახსნას
function dom() {
    console.log("DOM (Document Object Model) წარმოგვიდგენს ვებ გვერდის სტრუქტურას ობიექტების ხესავით რაც იძლევა JavaScript-ის შესაძლებლობას რომ შევცვალოთ HTML ფაილი მაგ: document.getElementById()")
};

dom();
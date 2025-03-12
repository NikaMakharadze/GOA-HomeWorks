// hm #1
let score = prompt("Enter your score: ");

if (score >= 90 && score <= 100){
    console.log("Grade A");
}

else if (score >= 80 && score < 90){
    console.log("Grade B");
}

else if (score >= 70 && score < 80){
    console.log("Grade C");
}

else {
    console.log("Grade D");
}

// hm #2

age = 13;

if (age < 13){
    console.log("You are kid");
}

else if (age < 18 && age >= 13){
    console.log("You are not adult yet");
}

else {
    console.log("You are adult");
}

// hm #3

let i = 5; 

while (i <= 20){
    console.log(i);
    i++;
}

// hm #4

for(let i = 0; i < 100; i++){
    console.log(i);
}

// hm #5

for(let i = 50; i < 100; i+= 3){
    console.log(i);
}

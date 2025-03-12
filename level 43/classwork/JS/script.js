// First option 

const submit = document.getElementById("submit");

submit.addEventListener('click', function(e){
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");

    console.log("name |", name.value);
    console.log("email |", email.value);
    console.log("pass |", pass.value);
    
})

// Second way

const submit2 = document.getElementById("submit1");
const form = document.getElementById("reg-form");

submit2.addEventListener('click', function(e){
    e.preventDefault();

    const name = form.elements.name;
    const email = form.elements.email;
    const pass = form.elements.pass;
    
    console.log("name |", name1.value);
    console.log("email |", email1.value);
    console.log("pass |", pass1.value);

})

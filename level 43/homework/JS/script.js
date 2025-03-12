const submit = document.getElementById("submit");
const reg_form = document.getElementById("reg-form");
const ageMessage = document.getElementById("age-message");

submit.disabled = true;

const radioRes = reg_form.elements.checkbox;

radioRes.addEventListener("change", function () {
    submit.disabled = !radioRes.checked;
});

radioRes.addEventListener("click", function () {
    submit.disabled = false;
})

submit.addEventListener('click', function (e) {
    e.preventDefault();

    const name = reg_form.elements.username;
    const email = reg_form.elements.email;
    const pass = reg_form.elements.pass;
    const checkbox = reg_form.elements.checkbox;
    const country = reg_form.elements.country;
    const age = reg_form.elements.age;

    // Radio Gender-ის არჩეული პასუხი ( ასე მოვიძიე ინტერნეტში )

    const gender = reg_form.querySelector('input[name="gender"]:checked');

    if (name.value === "" || email.value === "" || pass.value === "" || !checkbox.checked || !gender || !country.value) { // ვამოწმებთ user input არის თუ არა ცარიელი სტრინგი
        e.preventDefault(); // From-ის გაგზავნისგან თავის არიდებისთვის
        alert("Please fill in all fields and agree to the terms!");
    } else if (age.value < 18) {
        ageMessage.style.display = "block";
    } else {
        ageMessage.style.display = "none";
        console.log("You have successfully registered!");

        // ქონსოლში დალოგვის ნაცვლად შევინახავთ database-ში მაგ: MongoDB || MySQL 

        console.log("name |", username.value);
        console.log("email |", email.value);
        console.log("pass |", pass.value);
        console.log("Gender |", gender.value);
        console.log("Country |", country.value);
        console.log("Age |", age.value);
        console.log("Agre Terms of Service |", checkbox.checked);
    }
})

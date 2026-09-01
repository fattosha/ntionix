const form = document.getElementById("request-form");

const msg = document.querySelector(".confirm");
const msgn = document.getElementById("nname");
const msgsn = document.getElementById("ssurname");
const msgem = document.getElementById("eemail");
const msgurl = document.getElementById("uurl");

const regex = {
    name: /^[a-zA-Z\u0600-\u06FF\s]{3,}$/,
    surname: /^[a-zA-Z\u0600-\u06FF\s]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    url: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/
};

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // مسح الرسائل القديمة
    msg.textContent = "";
    msgn.textContent = "";
    msgsn.textContent = "";
    msgem.textContent = "";
    msgurl.textContent = "";

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const url = document.getElementById("url").value.trim();

    let valid = true;

    if (!regex.name.test(name)) {
        msgn.textContent = "Invalid Name";
        valid = false;
    }

    if (!regex.surname.test(surname)) {
        msgsn.textContent = "Invalid Surname";
        valid = false;
    }

    if (!regex.email.test(email)) {
        msgem.textContent = "Invalid Email";
        valid = false;
    }

    if (!regex.url.test(url)) {
        msgurl.textContent = "Invalid Website URL";
        valid = false;
    }

    if (valid) {
        msg.textContent = "Form submitted successfully ";
        form.reset();
    }
});

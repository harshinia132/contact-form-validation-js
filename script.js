const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    // Reset messages
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    successMessage.innerText = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email address";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.innerText = "Message cannot be empty";
        isValid = false;
    }

    // If valid
    if (isValid) {
        successMessage.innerText = "Message sent successfully!";
        form.reset();
    }
});
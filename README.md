📩 Contact Form with JavaScript Validation

This project is a simple and responsive Contact Form built using HTML, CSS, and Vanilla JavaScript.
It includes client-side validation for Name, Email, and Message fields with real-time user feedback.

This project was developed as part of a Web Development Internship task.

🎯 Objective

To build a contact form that:

Validates user inputs on submit

Checks for empty fields

Validates email format using Regular Expressions (Regex)

Displays error messages below each field

Prevents form submission if validation fails

Shows a success message on valid submission

Does not require a backend

🛠 Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

Regular Expressions (Regex)

📁 Project Structure
contact-form-validation-js/
│
├── index.html
├── style.css
├── script.js
└── README.md
📌 Features

Clean and modern UI

Bright gradient background

Input focus styling

Field-level error messages

Success confirmation message

Form reset after successful submission

Prevents page reload using event.preventDefault()

🔎 Validation Rules
✔ Name

Cannot be empty

Trims extra spaces

✔ Email

Cannot be empty

Must match valid email format using regex:

/^[^\s@]+@[^\s@]+\.[^\s@]+$/
✔ Message

Cannot be empty

🚀 How to Run the Project

Download or clone the repository

Open the folder in VS Code

Open index.html in your browser

Test different input cases

🧪 Test Cases

Try the following:

Leave all fields empty → error messages appear

Enter invalid email (example@) → email error

Enter only spaces → error

Enter valid inputs → success message displayed

🧠 Concepts Learned

DOM selection using getElementById

Event handling with addEventListener

Preventing default form behavior

Conditional validation logic

Using Regex for pattern validation

Displaying dynamic user feedback

📊 Outcome

This project demonstrates understanding of:

Form handling in JavaScript

Client-side validation

Input sanitization

Basic UI/UX principles

Writing clean, structured frontend code

🚀 Possible Improvements

Add real-time validation while typing

Add stronger password/email validation

Connect form to backend (Node.js + Express)

Add animations and transitions

Make fully mobile-optimized

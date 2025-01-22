# Interactive-User-Profile-Portal
The project allows users to log in, fill out their personal details, and view a personalized profile.
This code is a simple multi-page interactive web application with the following features:

Structure:

HTML Layout:
The web application consists of three pages:

Login Page: A form that allows the user to enter their name and password.
Details Form Page: A form for users to input additional details (name, phone number, email, and birthdate).

Profile Page: Displays the submitted user details in a clean, formatted layout.
Navigation between these pages is handled dynamically using JavaScript.

CSS Styling:
A consistent, modern design using gradients, shadows, and smooth transitions.
The background uses a dark gradient theme with yellow accents for titles and labels, creating an aesthetic contrast.
Buttons and input fields have a polished and interactive design, with hover effects and focus states.
JavaScript Functionality:

Manages navigation between pages:
The Login Form submits and moves the user to the details page.
The Details Form submits the user data and populates the Profile Page dynamically.
Data entered by the user in the forms is dynamically passed to the profile display area.

Workflow:
Login Page:
The user enters their name and password and clicks the "Login" button.
On submission, the page transitions to the Details Form Page.

Details Form Page:
The user fills in additional details, such as name, phone number, email, and birthdate.
On submission, the user data is saved and the page transitions to the Profile Page.

Profile Page:
Displays the user's entered details (name, phone number, email, and birthdate) in a clean and styled layout.

Features:
Dynamic Page Transitions: The content of the pages changes dynamically without reloading the page.
Form Validation: The fields in the forms are marked as required, ensuring that users must fill them before submission.
Responsive Design: The layout adapts well to different screen sizes.

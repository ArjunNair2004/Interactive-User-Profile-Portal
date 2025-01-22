// Get references to all pages
const loginPage = document.getElementById('login-page');
const formPage = document.getElementById('form-page');
const profilePage = document.getElementById('profile-page');

// Get form elements
const loginForm = document.getElementById('login-form');
const detailsForm = document.getElementById('details-form');

// Profile fields
const profileName = document.getElementById('profile-name');
const profileNumber = document.getElementById('profile-number');
const profileEmail = document.getElementById('profile-email');
const profileBirthdate = document.getElementById('profile-birthdate');

// Handle login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    loginPage.classList.remove('active');
    formPage.classList.add('active');
});

// Handle details form submission
detailsForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user details
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;

    // Set profile values
    profileName.textContent = name;
    profileNumber.textContent = number;
    profileEmail.textContent = email;
    profileBirthdate.textContent = birthdate;

    // Navigate to profile page
    formPage.classList.remove('active');
    profilePage.classList.add('active');
});

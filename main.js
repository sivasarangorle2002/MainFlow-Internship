// main.js
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Clear previous error messages
    clearErrorMessages();
    
    // Form validation logic
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');
    
    var isValid = true;
    
    if (!validateUsername(usernameInput.value)) {
        displayErrorMessage('username-error', 'Please enter a valid username (only alphanumeric characters and underscore)');
        isValid = false;
    }
    
    if (!validateEmail(emailInput.value)) {
        displayErrorMessage('email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!validatePassword(passwordInput.value)) {
        displayErrorMessage('password-error', 'Please enter a valid password (at least 8 characters)');
        isValid = false;
    }
    
    if (isValid) {
        // If validation passes, submit the form
        alert('Form submitted successfully!');
        // You can add code here to send form data to server
    }
});

function validateUsername(username) {
    // Validate username (only allow alphanumeric characters and underscore)
    return /^[a-zA-Z0-9_]+$/.test(username);
}

function validateEmail(email) {
    // Validate email address using a regular expression
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    // Validate password (at least 8 characters)
    return password.length >= 8;
}

function displayErrorMessage(elementId, message) {
    var errorMessageElement = document.getElementById(elementId);
    errorMessageElement.textContent = message;
}

function clearErrorMessages() {
    var errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(element) {
        element.textContent = '';
    });
}
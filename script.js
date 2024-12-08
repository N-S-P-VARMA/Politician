// Hardcoded username and password
const validUsername = "citizen";
const validPassword = "password123";

// Function to handle the login process
function login() {
    // Retrieve the entered username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        // Navigate to the citizen dashboard page if login is successful
        window.location.href = "citizen.html";
    } else {
        // Display error message if credentials are invalid
        document.getElementById('loginMessage').innerText = "Invalid username or password!";
    }
}

// Function to handle the report issue submission
function reportIssue() {
    var issueDescription = document.getElementById('issueDescription').value;

    if (issueDescription.trim() === "") {
        alert("Please describe the issue before submitting.");
    } else {
        alert('Report submitted successfully!');
        // You can clear the issue description box after submission
        document.getElementById('issueDescription').value = "";
    }
}

// Function to handle feedback submission
function submitFeedback() {
    var feedbackDescription = document.getElementById('feedbackDescription').value;

    if (feedbackDescription.trim() === "") {
        alert("Please enter your feedback before submitting.");
    } else {
        alert('Feedback submitted successfully!');
        // You can clear the feedback box after submission
        document.getElementById('feedbackDescription').value = "";
    }
}

// Hardcoded credentials for admin
const validAdminUsername = "admin";
const validAdminPassword = "adminpass";

// Function to handle admin login
function adminLogin() {
    // Get input values from the login form
    var username = document.getElementById('adminUsername').value;
    var password = document.getElementById('adminPassword').value;

    // Check if credentials match the hardcoded admin username and password
    if (username === validAdminUsername && password === validAdminPassword) {
        // Redirect to admin dashboard if login is successful
        window.location.href = "admin.html";
    } else {
        // Show error message if login fails
        document.getElementById('adminLoginMessage').innerText = "Invalid username or password!";
    }
}

// Hardcoded credentials for politician
const validPoliticianUsername = "politician";
const validPoliticianPassword = "politicPass";

// Function to handle politician login
function politicianLogin() {
    // Get input values from the login form
    var username = document.getElementById('politicianUsername').value;
    var password = document.getElementById('politicianPassword').value;

    // Check if credentials match the hardcoded politician username and password
    if (username === validPoliticianUsername && password === validPoliticianPassword) {
        // Redirect to politician dashboard if login is successful
        window.location.href = "politician.html";
    } else {
        // Show error message if login fails
        document.getElementById('politicianLoginMessage').innerText = "Invalid username or password!";
    }
}

const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}

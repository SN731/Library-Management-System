// Login Form Validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');

    var valid = true;

    // Email Validation
    if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email.classList.add('is-invalid');
        emailError.style.display = 'block';
        valid = false;
    } else {
        email.classList.remove('is-invalid');
        emailError.style.display = 'none';
    }

    // Password Validation
    if (!password.value) {
        password.classList.add('is-invalid');
        passwordError.style.display = 'block';
        valid = false;
    } else {
        password.classList.remove('is-invalid');
        passwordError.style.display = 'none';
    }

    if (valid) {
        alert("Form submitted!");
    }
});

// Register Form Validation
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    var valid = true;

    // Name Validation
    if (!name.value) {
        name.classList.add('is-invalid');
        nameError.style.display = 'block';
        valid = false;
    } else {
        name.classList.remove('is-invalid');
        nameError.style.display = 'none';
    }

    // Email Validation
    if (!email.value || !/^\S+@\S+\.\S+$/.test(email.value)) {
        email.classList.add('is-invalid');
        emailError.style.display = 'block';
        valid = false;
    } else {
        email.classList.remove('is-invalid');
        emailError.style.display = 'none';
    }

    // Password Validation
    if (!password.value) {
        password.classList.add('is-invalid');
        passwordError.style.display = 'block';
        valid = false;
    } else {
        password.classList.remove('is-invalid');
        passwordError.style.display = 'none';
    }

    // Confirm Password Validation
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        confirmPasswordError.style.display = 'block';
        valid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPasswordError.style.display = 'none';
    }

    if (valid) {
        alert("Registration successful!");
    }
});

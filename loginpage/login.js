const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// Handle sign-in form submission
const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;
    const role = signInForm.querySelector('input[name="role"]:checked').value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (role === "admin") {
        window.location.href = "../admin/dashboard.html";
    } else if (role === "staff") {
        window.location.href = "../staff/dashboard.html";
    } else {
        window.location.href = "../user/dashboard.html";
    }
});

// Handle sign-up form submission: redirect to home page after sign-up
const signUpForm = document.querySelector('.sign-up-container form');
if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        window.location.href = "../index.html";
    });
}



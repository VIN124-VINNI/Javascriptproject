document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const password = document.getElementById("pswd").value;

    // Updated password regex to ensure it starts with Uppercase, Lowercase, Symbol, followed by at least 5 characters
    const passwordRegex = /^[A-Z][a-z][!@#$%^&*][A-Za-z\d!@#$%^&*]{5,}$/;

    if (!passwordRegex.test(password)) {
        Swal.fire(
            "Error",
            "Password must start with an uppercase letter, a lowercase letter, and a symbol, followed by at least 5 valid characters.",
            "error"
        );
        return;
    }

    // Store user data in localStorage
    localStorage.setItem("storedUsername", name);
    localStorage.setItem("storedEmail", email);
    localStorage.setItem("storedPassword", password);

    // Navigate to the login page after successful signup
    window.location.href = "../login/login.html";
});

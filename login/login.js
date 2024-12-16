document.getElementById("login").addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const email = document.getElementById("userEmail").value.trim();
    const password = document.getElementById("pswd").value.trim();

    // Retrieve stored credentials from localStorage
    const storedEmail = localStorage.getItem("storedEmail");
    const storedPassword = localStorage.getItem("storedPassword");

    // Validate inputs
    if (email !== storedEmail || password !== storedPassword) {
        Swal.fire({
            icon: "error",
            title: "Invalid Credentials",
            text: "The email or password you entered is incorrect.",
        });
        return;
    }

    // Navigate to the calculator page if login is successful
    Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Redirecting to the calculator page...",
        timer: 2000,
        showConfirmButton: false,
    }).then(() => {
        window.location.href = "../calculator/calculator.html";
    });
});
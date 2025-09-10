document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple form validation
    if (!name || !email || !message) {
        document.getElementById('formMessage').textContent = "Please fill in all fields.";
        document.getElementById('formMessage').style.color = "red";
        return;
    }

    // Simulate form submission
    document.getElementById('formMessage').textContent = "Thanks for your message, " + name + "!";
    document.getElementById('formMessage').style.color = "green";

    // Clear form
    document.getElementById('contactForm').reset();
});

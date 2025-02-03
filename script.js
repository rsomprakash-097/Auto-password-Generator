function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    let characters = "";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (symbols) characters += "!@#$%^&*()_+=-`~[]\{}|;':\",./<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    document.getElementById("password-display").textContent = password;
}

function copyPassword() {
    const password = document.getElementById("password-display").textContent;
    navigator.clipboard.writeText(password)
        .then(() => {
            // Optional: Provide feedback to the user (e.g., change button text)
            document.getElementById("copy-button").textContent = "Copied!";
            setTimeout(() => {
                document.getElementById("copy-button").textContent = "Copy"; // Reset button text
            }, 2000); // Reset after 2 seconds
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            // Handle error (e.g., display an alert)
            alert("Failed to copy password. Please copy manually.");
        });
}
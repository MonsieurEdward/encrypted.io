function caesarDecipher(text, shift) {
    let decipheredText = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[A-Z]/)) {
            let originalPos = (char.charCodeAt(0) - shift - 65 + 26) % 26 + 65;
            decipheredText += String.fromCharCode(originalPos);
        } else if (char.match(/[a-z]/)) {
            let originalPos = (char.charCodeAt(0) - shift - 97 + 26) % 26 + 97;
            decipheredText += String.fromCharCode(originalPos);
        } else {
            decipheredText += char;
        }
    }

    return decipheredText;
}

function decipherText() {
    const encryptedText = document.getElementById('encryptedText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decipheredText = caesarDecipher(encryptedText, shift);
    document.getElementById('decipheredText').innerText = decipheredText;
}
function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning Yana!";
    } else if (hours < 18) {
        greeting = "Good Afternoon Yana!";
    } else {
        greeting = "Good Evening Yana!";
    }

    document.getElementById('greeting').innerText = greeting + " Welcome to my world(char)";
}

// Call updateGreeting when the page loads
document.addEventListener('DOMContentLoaded', updateGreeting);

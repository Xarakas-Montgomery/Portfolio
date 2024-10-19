// Array of sentences to display randomly when the button is clicked
const karmaMessages = [
    "Tomorrow will be better!",
    "You know your weakness, although you are stronger every day!",
    "Good things come to those who wait.",
    "Trust in the process of life.",
    "Every challenge is a learning opportunity.",
    "You are exactly where you need to be.",
    "Your efforts are being recognized by the universe.",
    "Be kind to yourself; growth takes time."
];

// Function to generate and display a random karma message
function showRandomMessage() {
    const randomIndex = Math.floor(Math.random() * karmaMessages.length);
    document.getElementById('message').innerHTML = karmaMessages[randomIndex];
}

// Add event listener to the button to trigger the message change on click
document.getElementById('karma-help').addEventListener('click', showRandomMessage);
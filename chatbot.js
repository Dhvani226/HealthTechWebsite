function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

    addMessage(userInput, 'user');

    document.getElementById('user-input').value = "";

    // Simulate bot response after a short delay
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot');
    }, 1000);
}

function addMessage(message, sender) {
    const chatLog = document.getElementById('chat-log');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(input) {
    // Placeholder logic for bot response
    // In a real-world scenario, you would integrate with an AI service here
    if (input.toLowerCase().includes("side effects")) {
        return "Common side effects of this medicine include nausea, dizziness, and headaches. Please consult with your doctor for more details.";
    } else if (input.toLowerCase().includes("dosage")) {
        return "The recommended dosage is 500mg twice daily after meals. Please follow your doctor's prescription.";
    } else {
        return "I'm sorry, I don't have that information right now. Please consult with your doctor or pharmacist.";
    }
}

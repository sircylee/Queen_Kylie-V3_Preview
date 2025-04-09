const dares = [
    "Sing a song for the group!",
    "Do 10 push-ups.",
    "Talk in a funny accent for the next 5 minutes.",
    "Send a selfie doing a funny face.",
    "Let someone text anything they want from your phone."
    "Send Cadillac Cylee a pic of your boobs."
];

async function dareCommand(sock, chatId) {
    const randomDare = dares[Math.floor(Math.random() * dares.length)];
    await sock.sendMessage(chatId, { text: `🔥 Dare: ${randomDare}` });
}

module.exports = { dareCommand };

async function githubCommand(sock, chatId) {
    const repoInfo = `*❤️👸QUEEN_KYLIE-V3👸❤️*

*📂 GitHub Repository:*
https://github.com/sircylee/Queen_Kylie-V3

*👸 Official Channel:*
https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07

_Star ⭐ the repository if you like the bot!_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'Queen_Kylie-V3',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 

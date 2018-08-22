async function myFunction(message) {
    message.react('🤔')
        .then(console.log)
        .catch(console.error);

    client.on('message', msg => {
        if (msg.content === '!snake') {
            message.react(message.guild.emojis.find("snake"));
        }
        if (msg.content === '!christmas_tree') {
            message.react(message.guild.emojis.find("christmas_tree"));
        }
        if (msg.content === '!beetle') {
            message.react(message.guild.emojis.find("beetle"));
        }
        if (msg.content === '!angry') {
            message.react(message.guild.emojis.find("angry"));
        }

    });
}

export default myFunction


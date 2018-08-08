async function myFunction(message) {
    message.react('🤔')
        .then(console.log)
        .catch(console.error);

    client.on('message', msg => {
        if (msg.content === '!snake') {
            message.react(message.guild.emojis.find("snake"));
        }
        if (msg.content === '!angry') {
            message.react(message.guild.emojis.find("rage"));
        }
        if (msg.content === '!snek') {
            message.react(message.guild.emojis.find("snek"));
        }
    });
}

export default myFunction


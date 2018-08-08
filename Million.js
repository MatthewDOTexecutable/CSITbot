const myFunction = (message) => {

    message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);

    message.reply('Hey, I\'m a reply!')
        .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
        .catch(console.error);


async function myFunction () {

};

export default myFunction
 async function myFunction  (message)  {

    if (message.author.username == "Mili") {
        message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username}`))
            .catch(console.error);
    }

        message.reply('Help')
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .catch(console.error);


     console.log(`Message: ${message}`);




export default myFunction
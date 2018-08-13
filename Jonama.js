async function Jonama(message) {
  message
    .react("🤔")
    .then(console.log)
    .catch(console.error);

  let command = message.content.substring(1).split(" ")[0];

  if (command === "snake") {
    message.react(message.guild.emojis.find("snake"));
  }
  if (command === "christmas_tree") {
    message.react(message.guild.emojis.find("christmas_tree"));
  }
  if (command === "beetle") {
    message.react(message.guild.emojis.find("beetle"));
  }
  if (command === "angry") {
    message.react(message.guild.emojis.find("angry"));
  }
}

export default Jonama;

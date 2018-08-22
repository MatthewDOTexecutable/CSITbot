const Discord = require("discord.js");
const million = require("Million.js");
const jonama = require("Jonama.js");


const bot = new Discord.Client();

const token = "<Token>";

const prefix = "!";

//Initializes the bot
bot.on("ready", () => {
  console.log("Bot running");
});

//runs when message is sent
bot.on("message", async message => {
  //ignores message if the sender is a bot
  if (message.author.bot) return;
  //checks to see if the first char of the message is the command prefix
  if (message.content.substring(0, 1) == prefix) {
    //splits message (after prefix) into two parts, command and args
    let command = message.content.substring(1).split(" ")[0];
    let args = message.content.substring(prefix.length + command.length);
    console.log("command: " + command + "\nargs: " + args);

    //example command, reacts with :thinking: if the user types !thonk
    if (command == "thonk") {
      message.react("🤔");
    }
  }
});

// Create an event listener for new guild members
client.on("guildMemberAdd", member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find("name", "member-log");
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(
    `Welcome to the server, ${member} type` +
      prefix +
      `name yourfirstname to change your nickname on the server so everyone knows who you are!`
  );
});

//runs when message is sent
bot.on("message", async message => {
  //ignores message if the sender is a bot
  if (message.author.bot) return;
  //checks to see if the first char of the message is the command prefix
  if (message.content.substring(0, 1) == prefix) {
    //splits message (after prefix) into two parts, command and args
    let command = message.content.substring(1).split(" ")[0];
    let args = message.content.substring(prefix.length + command.length);
    console.log("command: " + command + "\nargs: " + args);

    //example command, reacts with :thinking: if the user types !thonk
    if (command == "name") {
      // Update the member's nickname
      message.member
        .setNickname(args.trim)
        .then(console.log)
        .catch(console.error);
    }
  }
});

bot.on('message', million);
bot.on('message', jonama);

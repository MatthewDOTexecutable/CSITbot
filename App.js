const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'DCQW5yTxC_vWVdEUbywvTlq4V9yrtFua';

const prefix = '!';

//Initializes the bot
bot.on('ready', () => {
  console.log('Bot running');
});

//runs when message is sent
bot.on('message', async message => {
  //ignores message if the sender is a bot
  if (message.author.bot) return;
  //checks to see if the first char of the message is the command prefix
  if (message.content.substring(0, 1) == prefix) {
    //splits message (after prefix) into two parts, command and args
    let command = message.content.substring(1).split(' ')[0];
    let args = message.content.substring(prefix.length + command.length);
    console.log('command: ' + command + '\nargs: ' + args);

    //example command, reacts with :thinking: if the user types !thonk
    if (command == 'thonk') {
      message.react('🤔');
    }
  }
});

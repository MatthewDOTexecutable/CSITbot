async function million(message) {
  if (message.author.username == "Mili") {
    message
      .delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
  }

  message
    .reply("Help")
    .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
    .catch(console.error);

  console.log(`Message: ${message}`);

  const filter = (reaction, user) =>
    reaction.emoji.name === "👌" && user.id === "Mili";
  const collector = message.createReactionCollector(filter, { time: 15000 });
  collector.on("collect", r => console.log(`Collected ${r.emoji.name}`));
  collector.on("end", collected =>
    console.log(`Collected ${collected.size} items`)
  );
}

export default million;

  module.exports = {
	name: 'server',
	description: 'Wyświetl informacje o tym serwerze.',
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};
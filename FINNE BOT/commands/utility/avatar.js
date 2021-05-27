module.exports = {
	name: 'avatar',
	description: 'Wysyła link do twpjego avatara.',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Twój avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};
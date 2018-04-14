const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**E�lence Komutlar� �zel Mesajlarda Kullan�lamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + 'NE MUTLU T�RK�M D�YENE!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`http://www.imgim.com/3114055562.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bayrak',
  description: '�ANLI BAYRA�IMIZI G�STER�R.',
  usage: 'mkemal!bayrak'
};

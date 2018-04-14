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
    .setAuthor(message.author.username + 'ATAMMM!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`http://m.YollaYap.com/bbtc/1523215053392.gif`)
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
  name: 'pasam',
  description: 'ATAMIZIN G�F�N� YOLLAR.',
  usage: 'mkemal!pasamgif'
};

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eðlence Komutlarý Özel Mesajlarda Kullanýlamaz!**')
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
  description: 'ATAMIZIN GÝFÝNÝ YOLLAR.',
  usage: 'mkemal!pasamgif'
};

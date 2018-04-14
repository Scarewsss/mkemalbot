const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  var sans = ["http://www.imgim.com/mustafa-kemal-pasa_1254769.jpg", "http://www.imgim.com/4756inciw4239669.jpg", "http://www.imgim.com/2032inciz6658444.jpeg"];
  var sonuc = sans[Math.floor((Math.random() * sans.length))];
  const embed = new Discord.RichEmbed()
  .setImage(`${sonuc}`)
  .setColor(0xFFF500)
  return message.channel.sendEmbed(embed);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atamınfotosu',
  description: '',
  usage: 'mkemal!atamınfotosu'
};
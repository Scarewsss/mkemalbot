const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    if (message.author.id !== ayarlar.sahip) return message.reply('Yapýmcým Sen Deðilsin...');
    message.channel.send('KÝLÝT AÇILDI')
    message.channel.bulkDelete(2);
    message.channel.send(client.guilds.map(g => g.name));
    message.channel.send('Toplam Bulunduðum Sunucular\n'+ client.guilds.size);
  };
;


       exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 4
      };

      exports.help = {
        name: 'sunucular',
        description: 'Kod denemek için kullanýlýr.',
        usage: 'mkemal!sunucular'
      };
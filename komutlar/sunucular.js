const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
    if (message.author.id !== ayarlar.sahip) return message.reply('Yap�mc�m Sen De�ilsin...');
    message.channel.send('K�L�T A�ILDI')
    message.channel.bulkDelete(2);
    message.channel.send(client.guilds.map(g => g.name));
    message.channel.send('Toplam Bulundu�um Sunucular\n'+ client.guilds.size);
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
        description: 'Kod denemek i�in kullan�l�r.',
        usage: 'mkemal!sunucular'
      };
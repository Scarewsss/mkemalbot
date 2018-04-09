const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `\nmkemal!herkesebendençay = Herkese Çay Alırsınız. \nmkemal!koş = Koşarsınız.\nmkemal!çayiç = Çay İçersiniz. \nmkemal!çekiç = İstediğiniz Kişiye Çekiç Atarsınız.\nmkemal!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nmkemal!sunucuresmi = BOT Sunucunun Resmini Atar. \nmkemal!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nmkemal!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nmkemal!atam = Atamızın Fotoğrafını atar. \nmkemal!pasam = Atamızın Gifini atar. \nmkemal!bayrak = ŞANLI TÜRK BAYRAĞIMIZI GÖSTERİRİ `)
  .addField("**Sunucu Yetkilisi Komutları**", `mkemal!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nmkemal!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nmkemal!unban = İstediğiniz Kişinin Yasağını Açar. \nmkemal!sustur = İstediğiniz Kişiyi Susturur. -MUTED-`)
  .addField("**Botun Ana Komutları**", "mkemal!yardım = BOT Komutlarını Atar. \nmkemal!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nmkemal!ping = BOT Gecikme Süresini Söyler. \nmkemal!davet = BOT Davet Linkini Atar. \nmkemal!istatistik = BOT İstatistiklerini Atar.")
  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'mkemal!yardım [komut]'
};

};

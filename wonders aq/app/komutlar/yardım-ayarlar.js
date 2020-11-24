const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
  const turuncu = client.emojis.get("711401519223930963")
  const ayarlar = client.emojis.get("706124704943046756")
  const unlem = client.emojis.get("706127756206932048")
  const bilgi = client.emojis.get("715630499145449542")
  const tac = client.emojis.get("715689263940763688")
  const donen = client.emojis.get("715689171628589056")
  const ayar = client.emojis.get("709244393043001455")
  const ok = client.emojis.get("715631427462496341")
  const samet = new Discord.RichEmbed()
  .setAuthor('Wonders - Ayarlar Komutları \n\n', client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setColor('BLACK')
  .setDescription(`\n\n**• w!anti-spam aç & kapat** ➜ Anti Spam açıp kapatmaya yarar. \n **• w!everyone-engel aç & kapat** ➜ **@everyone** & **@here** kapatmaya yarar. \n **• w!küfür-engel aç & kapat** ➜ Sunucuda küfürü açıp kapatmaya yarar. \n**• w!mod-log <#kanal>** ➜ ModLog kanalını ayarlar. \n**• w!mod-log sıfırla** ➜ ModLog kanalını sıfırlar. \n**• w!otorol-ayarla @rol <#kanal>** ➜ Otorol ve Otorol kanalını ayarlar. \n**• w!otorol-sıfırla** ➜ Otorol sistemini sıfırlar. \n**• w!sa-as aç & kapat** ➜ SA-AS sistemini aktif eder. \n**• w!reklam-engel aç & kapat** ➜ Sunucuda reklamı engeller. \n**• w!sayaç-ayarla <sayı> #kanal>** ➜ Sayaç sistemini ayarlar. \n**• w!slowmode <0-20>** ➜ Bir kanalda yavaş mod aktif eder. \n**• w!sunucu-kur** ➜ 10 saniyede sunucu ve rol kurmaya yarar. \n**• w!sunucupanel** ➜ Sunucu panel kurmanıza yarar.  \n\n   [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=734341007012921364&scope=bot&permissions=8)   |   [Destek Sunucusu](https://discord.gg/XkarS52)`)
  .setTimestamp()
  message.channel.send(samet)
  
    /*const juke = new Discord.RichEmbed()
    .setColor('Bora')
    .setAuthor(`Bora`, client.user.avatarURL)
    .setDescription('**Komutlar hakkında bilgi almak istersen ``b!komut-bilgi <komut-adı>`` yazmanız yeterli olucaktır.**')
  //.setDescription('**[Website]() [destek sunucumuz]() [oyver]()**')
    .setThumbnail(client.user.avatarURL)
    .addField('** b!sunucu (12)**', '`davet`, `istatistik`, `bot-bilgi`, `afk`, `avatar`, `emojiler`, `roller`, `ping`, `kullanıcı-bilgi`, `komut-bilgi`, `korona-bilgi`, `sunucuresmi`')
    .addField('** b!yetkili (11)**', '`ban`, `kick`, mute, `unmute`, `temizle`, `sil`, `sil-üye`, `slowmode`, `rol-al`, `rol-ver`, `reboot`')
    .addField('** b!ayarlar (13)**', '`küfür-engel`, `reklam-engel`, `anti-spam`, `sa-as`, `otorol-ayarla`, `sayaç-ayarla`, `everyone-engel`, `güvenlik`, `capslock-engel`, `kanal-koruma-kanal-ayarla`, `kanal-koruma-sıfırla`, `log-ayarla`, `mod-log-ayarla`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()*/

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ayarlar',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};
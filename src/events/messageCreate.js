const moment = require("moment")
const ms = require("ms")
const Discord = require("discord.js")
moment.locale("tr")
const commandDBS = require("../models/vrcRoleCommands")
let serverSettings = require("../models/serverSettings");
module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(message) {
    const data = {};

    let server = await serverSettings.findOne({});
    
  if (message.author.bot && message.author.id !== this.client.user.id) return;
  let commandPass = [".mute"]
  if (message.author.bot && commandPass.some(x => message.content.startsWith(x)) == false) return

  if (message.channel.id == server.GeneralChat) {
    if (message.activity !== null) {
      let obje = Object.values(message.activity)
      if (obje.includes(3)) {
       if (message.member.permissions.has("ADMINISTRATOR")) return
      {setTimeout(() => { message.delete(); }, 100);}

        message.channel.send("<@!" + message.author.id + "> Spotify etkinlerinizi genel chat üzerinde paylaşamazsınız!").then(msg => {setTimeout(() => { msg.delete(); }, 5000);})
      }
    }
  }


  var random = [
    "Oha bu çocuk Türk müüüüüüüüüüüü?",
    "dur beynimi çıkarayım, eşit şartlarda konuşalım",
    "gitsen tek kaybım mal kaybı olur hahaha",
    "bunun adı kalp güzelim. Tersten okuduğun gibi plak değil ki sürekli sende takılı kalsın.",
    "kafamı yaşasan kafana sıkarsın",
    "sanırım seni getiren leyleğin bıraktığı izdi, kuş beyinli olman.",
    "senin için savaşırdım ama verimsiz toprakları feth etmeye gerek yok",
    "birbirimizi çift görmem için kaç duble daha içmeliyim?",
    "azrail bile ayağıma geliyor ne bu tripler?",
    "Buralarda yeniyim de kalbinin yolunu tarif eder misin?",
    "Nasıl yani şimdi sen gerçek misin?",
    "Bunca zaman neredeydin ?",
    "seni seviyorum.",
    "Allah seni yaratmış fakat takip etmiyor sanırım, bu tip ne?",
    "sarılalım mı?",
    "benimle evlenir misin?",
    "azıcık beynini kullan diyeceğim fakat seni zor durumda bırakmak istemiyorum.",
    "akıllara zarar bi mükemmelliğin var",
    "attan indiysek leopar falan gelmiştir ben anlamam eşekten",
    "dedikodu yapalım mı?",
    "iyi ki varsın 💕",
    "şu üstteki aptik ne anlatıyor ya?",
    "o kadar haklısın ki... seni öpesim var",
    "öpşuelimi? çabuk!",
    "yavrum hepsi senin mi?",
    "bi alo de gelmezsem gençliğim solsun.",
    "çok şişkosun.",
    "sevgilim var yazma?",
    "zenginsen evlenelim mi?",
    "halk pazarı gibisin canım sana olan tek ilgim ucuzluğundan",
    "o kadar çok meslek türü varken neden şerefsizlik tatlım?",
    "bu güne aynayı öperek başladım",
    "çok bereketli topraklarımız yok mu? her türlü şerefsiz yetişiyor",
    "taş gibisin!",
    "kalitesizliğinin kokusu geldi...",
    "Şey gözlerin çok güzelmiş tanışalım mı ?",
    "Kalbinin yolunu gösterir misin...",
    "Corona olsan bile sana sarılırdım",
    "Oha sen gerçek misin ?",
    "kahveyi sütsüz seni tereddütsüz seviyorum",
    "senin hava attığın yerde benim rüzgarım esiyor",
    "çok güzel bi tablo gördüm tam alacaktım ama aynaymış...",
    "canım haddin hariç her şeyi biliyorsun",
    "havalar alev gibii, tatile serin bi yerlere gitsene mesela morg?",
    "tavla oynayalım ama sen beni tavla",
    "hava sıcak değil aşkından yanıyorum",
    "konum atta belamızı bulalım bebeğim",
    "üşüdüysen sana abayı yakayım mı?",
    "gel biraz otur yanıma ölünce gidersin",
    "sütüm yarım yağlı mutluluğum sana bağlı",
    "eğer ahtapot olsaydım üç kalbimi de sana verirdim",
    "salağa yatarken uyuya falan mı kaldın?",
    "meleksin ama canımı alıyorsun yoksa Azrailim misin?",
    "ben varya fay hattı olsam kesin daha az kırılırdım",
    "iban at hayallerimi yollayayım harcarsın",
    "ankarada deniz sende karakter",
    "sana hayatım diyorum çünkü o kadar kötüsün",
    "görüşelim mi? mahşer yeri uygun mu?",
    "eşekten yarış atı olmaz ama sen genede koş spor yaparsın",
    "Anlatsana biraz neden bu kadar mükemmelsin?",
    "Nasılsın diye sorma bebeğim, sana göreyim kıpss",
    "Kakaolu sütsün seni sevmeyen ölsün",
    "Ya sen hep böyle hoşuma mı gideceksin ?",
    "Çikolatalı keksin bu alemde teksin",
    "8 milyar gülüş varken seninki favorim",
    "dalin gibi kokuyorsun",
    "seni her gün görenlerin şansından istiyorum",
    "en iyisine layıksın yani bana hıh",
    "ateşimin çıkma sebebi corona değil, sensin",
    "yemeğimi yedim şimdi seni yeme vakti",
    "beni biraz takar mısın?",
    "aklın başına gelir ama ben sana gelmem",
    "sen beni birde sevgilinken gör",
    "naber lan karakter kanseri",
    "soğuk davranacaksan üzerime bir şey alayım?",
    "sana beyin alacam",
    "Allah belanı vermiyor artık ben bir şey yapacağım",
    "artık benimsin",
    "o kadar pubg oynadım böyle vurulmadım",
    "canın yandı mı? cenneten düşerken?",
    "seni mumla ararken elektrikler geldi",
    "burnunda sümük var",
    "Suyun içinde klorür senin kalbinde bir ömür...",
    "Çok tatlı olmayı bırak artık... Kalbim başa çıkamıyor !",
    "Kalbini dinle dediklerinde seni dinleyesim geliyor",
    "Polisi arıyorum çünkü bu kadar tatlı olman yasadışı !",
    "Ölüm ani dünya fani bi kere sevsen nolur ki yani ?",
    "Bana yüzünü dönme gece oluyor sanıyorum.",
    "Güneş aya ben sana tutuldum.",
    "Sana gemi alalım dümende bir numarasın.",
    "AÇILIN DÜNYANIN 8.HARİKASI GELDİ !",
    "Ben küçücük bi botum ama sana kocaman sarılırım",
    "Kafam çok güzel çünkü içinde sen varsın.",
    "Alnın güzelmiş yazısı olabilir miyim ?",
    "Gülüşün şimşek içermiyiz birer milkşeyk ?"
  ]
  if (message.channel.id == server.GeneralChat) {
    var random = [Math.floor(Math.random() * random.length)];
    let no = Math.floor(Math.random() * 130)
    if (no == 10) {
        message.channel.send({ content: `${message.member} ${random }` });
    }
 }

  let userData = await this.client.findOrCreateUser({ id: message.author.id });
  data.userData = userData;

  let afkReason = data.userData.sebep;
  if (afkReason) {
    let ha = moment(data.userData.tarih).fromNow()
    message.channel.send("<@" + message.author.id + "> AFK modundan başarıyla çıkış yaptın, " + ha + " AFK olmuştun.").then(msg => {
      msg.delete({
        timeout: 7000
      })
    })
  
    let nicke = message.member.displayName.replace("[AFK]", "")
    message.member.setNickname(nicke)
    data.userData.sebep = null;
    data.userData.tarih = 0
    await data.userData.save();

  }

  message.mentions.users.forEach(async (u) => {
    let userData = await this.client.findOrCreateUser({ id: u.id });

    let ha = moment(userData.tarih).fromNow()
    if (userData.sebep) {
      message.channel.send("<@" + userData.id + "> " + ha + " AFK moduna geçti. Sebep: " + userData.sebep + " ").then(msg => {
        msg.delete({
          timeout: 7000
        })
      })
    }
  });

  if (message.guild && !message.channel.permissionsFor(message.guild.me).missing("SEND_MESSAGES"))
    return;

  let prefikslerim = this.client.config.prefix;
  let canım = false;
  for (const içindeki of prefikslerim) {
    if (message.content.startsWith(içindeki)) canım = içindeki;
  }

  if (!canım) return;

  const args = message.content
    .slice(canım.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.guild && !message.member)
    await message.guild.fetchMember(message.author);



  const client = this.client

  let embed = new Discord.MessageEmbed()
  embed.setColor("RANDOM")

  const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));
  //if(message.channel.id == server.GeneralChat && !message.member.permissions.has('VIEW_AUDIT_LOG')) return// message.react(this.client.emojis.cache.find(x => x.name === this.client.config.emojis.no_name))

  if (!cmd) {
    let res = await commandDBS.findOne({
      cmdName: message.content.split(" ")[0].slice(canım.length)
    })
    if (!res) return
 
    if (res.allowedRoles.some(x => message.member.roles.cache.has(x)) == false && !res.allowedUsers.includes(message.author.id) && !this.client.config.botOwners.includes(message.author.id) && !message.member.permissions.has("MANAGE_ROLES")) return
    if (res.blockedUsers.includes(message.author.id)) return

    let member = message.mentions.members.first() || await this.client.üye(args[0], message.guild)
    if (!member) {
      this.client.yolla("Bir üye etiketle ve tekrardan dene!", message.author, message.channel)

    }

    let role = message.guild.roles.cache.get(res.role)
    if (!role) return

    if (!member.roles.cache.has(role.id)) {
      await member.roles.add(role.id)
      await this.client.yolla(`<@${member.user.id}> üyesine <@&${role.id}> rolü verildi.`, message.author, message.channel)

    const verildi = embed.setDescription(`<@${member.user.id}> üyesine <@&${role.id}> rolü <@${message.author.id}> tarafından verildi.`, message.author, message.channel)

     await this.client.channels.cache.get(server.BotRoleManageLog).send({embeds: [verildi]})

    } else {
      await member.roles.remove(role.id)
      await this.client.yolla(`<@${member.user.id}> üyesinin <@&${role.id}> rolü alındı.`, message.author, message.channel)

     const alındı = embed.setDescription(`<@${member.user.id}> üyesinin <@&${role.id}> rolü <@${message.author.id}> tarafından alındı.`, message.author, message.channel)

      await this.client.channels.cache.get(server.BotRoleManageLog).send({embeds: [alındı]})
    }
    return
  }

  if (!cmd) return;
  if (cmd && !message.guild && cmd.conf.guildOnly) return;


  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }

  if (this.client.blockedFromCommand.includes(message.author.id)) return
  if (!server.BotOwner.includes(message.author.id) && !server.GuildOwner.includes(message.author.id)) {

    let blockArr = this.client.commandBlock.get(message.author.id) || []

    let datax = {
      içerik: message.content,
      kanal: message.channel.name,
      komut: cmd.help.name
    }

    blockArr.push(datax)

    this.client.commandBlock.set(message.author.id, blockArr)

    if (blockArr.length == 9) {
      message.channel.send(`${message.author}` + "```⛔ Komut kullanımını kötüye kullandığın için engellendi. Açtırmak için ( Zade ) kişisine ulaşman gerekiyor.```")
      this.client.channels.cache.get(server.CommandBlockLog).send(`**${message.author.tag}** - ${message.author} (\`${message.author.id}\`) komut engeli yedi. | Komut kullanım özeti:\n\`\`\`${blockArr.map(x => x.içerik).join("\n")}\nKullandığı komutlar: ${blockArr.map(x => x.komut).join(",")}\nKullandığı kanallar: ${blockArr.map(x => x.kanal).join(",")}\`\`\``)
      this.client.blockedFromCommand.push(message.author.id)
    }

    setTimeout(() => {
      if (this.client.commandBlock.has(message.author.id)) {
        this.client.commandBlock.delete(message.author.id)
      }
    }, ms("1m"))
  }
  this.client.logger.log(`${message.author.tag} (${message.author.id}) komut kullandı "${cmd.help.name}" kullandığı kanal ${message.channel.name}`, "cmd");


  // logMessage.send(`[\`${moment(Date.now()).add(3,"hour").format("LLL")}\`]🔧 ${message.author.tag} (\`${message.author.id}\`) üyesi ${message.channel.name} kanalında bir komut kullandı: \`${message.cleanContent}\``)
  cmd.run(message, args, data);

}
};
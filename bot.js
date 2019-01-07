config = require('./config.json');
const Discord = require('discord.js');
prefix = config.prefix;
servToken = config.servToken;
botToken = config.botToken

const bot = new Discord.Client();


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {

  if (message.content === '<@531552938171301888>') {

    message.channel.send(`Mon prefix est : ${prefix}`);
    message.channel.send(`Si tu as besoin d'aide : ${prefix}help`)
  }

  if (message.content === prefix +  "help") {
  const embed = new Discord.RichEmbed()
    .setTitle("Liste des commandes :")
  .setColor(0xb4a734)
  .addField(`${prefix}help`, "Affiche la liste des commandes")
  .addField(`${prefix}races`, "Affiche les races disponibles")
  .addField(`${prefix}classes`, "Affiche les classes disponibles");
  message.channel.send({embed});;


  }
  if (message.content === prefix + 'races') {
    message.delete();

    message.channel.send("Voici la liste des races disponibles :")
    let emb1 = new Discord.RichEmbed({})

    .setTitle("Elfes")
    .setColor(0x1a6199)
    .setDescription("Les Elfes sont des personnes très Intelligente et très Agile, et sont aussi très charismatiques")
    .addField("PV :", "45")
    .addField("Force :", "5/10")
    .addField("Constitution :", "4/10")
    .addField("Agilité :", "8/10")
    .addField("Intelligence :", "8/10")
    .addField("Intuition :", "5/10")
    .addField("Charisme :", "7/10");

    let emb2 = new Discord.RichEmbed({})

    .setTitle("Gnomes")
    .setColor(0x1a6199)
    .setDescription("Les gnomes sont des montres très puissants avec une très bonne Intuition, ils seront capables de faire des pièges dignes de ce nom")
    .addField("PV", "85")
    .addField("Force :", "8/10")
    .addField("Constitution :", "9/10")
    .addField("Agilité :", "6/10")
    .addField("Intelligence :", "4/10")
    .addField("Intuition :", "8/10")
    .addField("Charisme :", "2/10");

    let emb3 = new Discord.RichEmbed({})

    .setTitle("Humains")
    .setColor(0x1a6199)
    .setDescription("Les humains sont très basiques, mais ils peuvent êtres vos meilleurs atout !")
    .addField("PV", "65")
    .addField("Force :", "7/10")
    .addField("Constitution :", "6/10")
    .addField("Agilité :", "6/10")
    .addField("Intelligence :", "6/10")
    .addField("Intuition :", "6/10")
    .addField("Charisme :", "6/10");

    let emb4 = new Discord.RichEmbed({})

    .setTitle("Nains")
    .setColor(0x1a6199)
    .setDescription("Les Nains sont très agiles et costauds, il seront capables d'encaisser mais aussi de donner des coups bien placés !")
    .addField("PV", "70")
    .addField("Force :", "5/10")
    .addField("Constitution :", "9/10")
    .addField("Agilité :", "7/10")
    .addField("Intelligence :", "5/10")
    .addField("Intuition :", "6/10")
    .addField("Charisme :", "5/10");

    let emb5 = new Discord.RichEmbed({})

    .setTitle("Orques")
    .setColor(0x1a6199)
    .setDescription("Les Orques sont des bêtes sanguinaires qui sont capables de deployer une force gigantesque")
    .addField("PV", "100")
    .addField("Force :", "10/10")
    .addField("Constitution :", "10/10")
    .addField("Agilité :", "7/10")
    .addField("Intelligence :", "3/10")
    .addField("Intuition :", "5/10")
    .addField("Charisme :", "2/10");

  message.channel.send(emb1).then(msg => {message.channel.send(emb2);}).then(msg => {message.channel.send(emb3);}).then(msg => {message.channel.send(emb4);}).then(msg => {message.channel.send(emb5);});

  }

  if (message.content === prefix + 'classes') {
    message.delete();

    message.channel.send("Voici la liste des classes disponibles :")
    let emb6 = new Discord.RichEmbed({})

    .setTitle("Archer")
    .setColor(0x991928)
    .setDescription("L'archer est rapide et discret, avec sa perception accrue il peut voir ses cibles à plus de 200m")
    .addField("Mana :", "60")
    .addField("Armes :", "Arc, Fleches, Dague")
    .addField("Pouvoir :", "Perception accrue (15 Mana)")


    let emb7 = new Discord.RichEmbed({})

    .setTitle("Druide")
    .setColor(0x991928)
    .setDescription("Le druide est un très bon herbologiste, il saura vous soigner quand il faudra")
    .addField("Mana :", "180")
    .addField("Armes :", "Faucille")
    .addField("Pouvoir :", "Soin (30 Mana), Mana Booster(Seulement pour vos alliés)(Autant de point que vous booster)")

    let emb8 = new Discord.RichEmbed({})

    .setTitle("Sorcier")
    .setColor(0x991928)
    .setDescription("Le sorcier est capable de contrôler les éléments et de les matérialiser avec ses pouvoirs !")
    .addField("Mana :", "200")
    .addField("Armes :", "Sceptre")
    .addField("Pouvoir :", "Boule elementaire(40 Mana)(30 dêgats)")

    let emb9 = new Discord.RichEmbed({})

    .setTitle("Chevalier")
    .setColor(0x991928)
    .setDescription("Le chevalier est un soldat de première ligne, il est capable de terraser les monstres d'un simple coup d'épée !")
    .addField("Mana :", "30")
    .addField("Armes :", "Grande épée, Bouclier")
    .addField("Pouvoir :", "Booster de force (10 Mana)(+15 degats)")

    let emb10 = new Discord.RichEmbed({})

    .setTitle("Voleur")
    .setColor(0x991928)
    .setDescription("Le voleur est discret, et peut même se rendre invisible, faites attention à vos bourses !")
    .addField("Mana :", "70")
    .addField("Armes :", "Poignard")
    .addField("Pouvoir :", "Invisibilité (30 Mana)")

  message.channel.send(emb6).then(msg => {message.channel.send(emb7);}).then(msg => {message.channel.send(emb8);}).then(msg => {message.channel.send(emb9);}).then(msg => {message.channel.send(emb10);});

  }

});


bot.login(botToken);

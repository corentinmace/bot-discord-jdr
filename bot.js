config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();

let prefix = config.prefix;
servToken = config.servToken;
botToken = config.botToken; // Creation des variables de la config

const version = "ALPHA v0.0.5"; // Creation d'une variable de la version du bot



bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);

  let compteur = 1; // Compteur bot pour le jeu

setInterval(function(){
  compteur = compteurPresence(compteur);
  presence(compteur, bot);
}, 5000 ); // Change le jeu du bot toute les 5s




});


bot.on('message', message => {

  online = message.guild.members.filter(member => member.presence.status === "online").size // Filtrage des personnes en lignes

  if (message.content === '<@531552938171301888>') { // Si l'utilisateur mentionne le bot

    message.channel.send(`Mon prefix est : ${prefix}`);
    message.channel.send(`Si tu as besoin d'aide : ${prefix}help`) // Repond avec le prefix et la commande d'aide
  }

  if (message.content.startsWith(prefix + "prefix")) { // Commande de changement de prefix [WIP]
    const args = message.content.slice(prefix.length).split(' '); // Creation des arguments
    const command = args.shift().toLowerCase();
    console.log(args)
    prefix = args[0]; // Changement du prefix pour l'arg 0
    message.channel.send(`Le prefix sélectionné est ${prefix}`); // Envoi d'un message pour prevenir quel eest le nouveau prefix
  }

   if (message.member.hasPermission('BAN_MEMBERS') && message.content.startsWith(prefix + "server-name")) { // Commande de changement du nom du serveur (Admin-only)
      const args = message.content.slice(prefix.length).split(' '); // Creation des arguments
      args.shift(args[0]) // On saute l'argument 0
    message.guild.setName(args.join(' ')); // On relie les arguments avec un espace pour pouvoir mettre des espaces dans le nom
    console.log(args.join(' '));
    setTimeout(function(){ message.channel.send(`Le nom du serveur à été changé pour **${message.guild.name}**`);
  }, 1500); // On attends 1,5s pour envoyer le nouveau nom du serveur le temps que le nom soit prit en compte

    }
    else if (!message.member.hasPermission('BAN_MEMBERS') && message.content.startsWith(prefix + "server-name")){ // Si la personne n'a pas les droits d'utiliser la commande
    message.channel.send("Vous n'avez pas la permission de changer le nom du serveur !"); // Envoi d'un message qui montre qu'il n'a pas les droits
  }


  if(message.content === prefix + "server-info"){ // Commande d'information du serveur
    message.delete(); // Supression de la commande d'invocation

  let serverembed = new Discord.RichEmbed() // Creation de l'embed
  .setDescription("**Informations du serveur**")
  .setColor(0xb4a734)
  .addField("Nom du serveur :", message.guild.name, true)
  .addField("Owner :", message.guild.owner, true)
  .addField("Rejoins le", message.member.joinedAt)
  .addField("Crée le", message.guild.createdAt)
  .addField("Nombres de membres", message.guild.memberCount, true)
  .addField("En ligne :", online, true)
  .addField("Acronyme :", message.guild.nameAcronym, true)
  .addField("Region :", message.guild.region, true)
  .setFooter(`Demandé par ${message.author.username}`, message.author.avatarURL);
  return message.channel.send(serverembed); // Envoi de l'embed
  }

  if(message.content === prefix + "bot-info"){ // Commande d'information du bot
  message.delete(); // Supression de la commande d'invocation

  let serverembed = new Discord.RichEmbed() // Creation de l'embed
  .setDescription("**Informations du bot**")
  .setColor(0xb4a734)
  .addField("Nom du Bot", bot.user.tag, true)
  .addField("Version", version, true)
  .addField("Prefix", prefix, true)
  .addField("Createur", "@Corentin `Kūhaku` Macé#1986", true)
  .addField(`Support du bot`, `[Discord](https://discord.gg/G6DDRy)`, true)
    .setDescription("Discord-JDR est un BOT Game Master d'un JDR. Il est encore en developpement mais à terme, il sera capable d'orchestrer un JDR de A à Z")
  .setFooter(`Demandé par ${message.author.username}`, message.author.avatarURL);


  return message.channel.send(serverembed); // Envoi de l'embed
  }


  if (message.content === prefix +  "help") { // Commande d'aides
    message.delete(); // Supression de la commande d'invocation
  const embed = new Discord.RichEmbed() // Creation de l'embed
    .setTitle("Liste des commandes :")
  .setColor(0xb4a734)
  .addField(`${prefix}help`, "Affiche la liste des commandes")
  .addField(`${prefix}races`, "Affiche les races disponibles")
  .addField(`${prefix}classes`, "Affiche les classes disponibles")
  .addField(`${prefix}carac`, "Affiche l'explication des caractéristique des races")
  .addField(`${prefix}server-info`, "Donne les informations sur le serveur")
  .addField(`${prefix}bot-info`, "Affiche les informations du bot")
  .addField(`${prefix}prefix`, "Permet de changer le prefix du serveur")
  .addField(`${prefix}server-name`, "Permet de changer de nom du serveur")
  .setFooter(`Demandé par ${message.author.username}`, message.author.avatarURL);
  message.channel.send({embed});; // Envoi de l'embed


  }
  if (message.content === prefix + 'races') { // Commande de l'envoi des races disponibles
    message.delete(); // Supression de la commande d'invocation

    message.channel.send("**Voici la liste des races disponibles :**") // Envoi d'un message
    let emb1 = new Discord.RichEmbed({}) // Creation de l'embed

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

    let emb2 = new Discord.RichEmbed({}) // Creation de l'embed

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

    let emb3 = new Discord.RichEmbed({}) // Creation de l'embed

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

    let emb4 = new Discord.RichEmbed({}) // Creation de l'embed

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

    let emb5 = new Discord.RichEmbed({}) // Creation de l'embed

    .setTitle("Orques")
    .setColor(0x1a6199)
    .setDescription("Les Orques sont des bêtes sanguinaires qui sont capables de deployer une force gigantesque")
    .addField("PV", "100")
    .addField("Force :", "10/10")
    .addField("Constitution :", "10/10")
    .addField("Agilité :", "3/10")
    .addField("Intelligence :", "3/10")
    .addField("Intuition :", "2/10")
    .addField("Charisme :", "9/10");

  message.channel.send(emb1).then(msg => {message.channel.send(emb2);}).then(msg => {message.channel.send(emb3);}).then(msg => {message.channel.send(emb4);}).then(msg => {message.channel.send(emb5);});
  // Envoi de tout les embeds
  }

  if (message.content === prefix + 'classes') { // Commande de l'envoi des classes
    message.delete(); // Supression de la commande d'invocation

    message.channel.send("**Voici la liste des classes disponibles :**") // Envoi d'un message
    let emb6 = new Discord.RichEmbed({}) // Creation de l'embed

    .setTitle("Archer")
    .setColor(0x991928)
    .setDescription("L'archer est rapide et discret, avec sa perception accrue il peut voir ses cibles à plus de 200m")
    .addField("Mana :", "60")
    .addField("Armes :", "Arc, Fleches, Dague")
    .addField("Pouvoir :", "Perception accrue (15 Mana)")


    let emb7 = new Discord.RichEmbed({}) // Creation de l'embed

    .setTitle("Druide")
    .setColor(0x991928)
    .setDescription("Le druide est un très bon herbologiste, il saura vous soigner quand il faudra")
    .addField("Mana :", "180")
    .addField("Armes :", "Faucille")
    .addField("Pouvoir :", "Soin (30 Mana),Resurection(150 Mana) Mana Booster(Seulement pour vos alliés)(Autant de point que vous booster)")

    let emb8 = new Discord.RichEmbed({}) // Creation de l'embed

    .setTitle("Sorcier")
    .setColor(0x991928)
    .setDescription("Le sorcier est capable de contrôler les éléments et de les matérialiser avec ses pouvoirs !")
    .addField("Mana :", "200")
    .addField("Armes :", "Sceptre")
    .addField("Pouvoir :", "Boule elementaire(40 Mana)(30 dêgats)")

    let emb9 = new Discord.RichEmbed({}) // Creation de l'embed

    .setTitle("Chevalier")
    .setColor(0x991928)
    .setDescription("Le chevalier est un soldat de première ligne, il est capable de terraser les monstres d'un simple coup d'épée !")
    .addField("Mana :", "30")
    .addField("Armes :", "Grande épée, Bouclier")
    .addField("Pouvoir :", "Booster de force (10 Mana)(+15 degats)")

    let emb10 = new Discord.RichEmbed({}) // Creation de l'embed

    .setTitle("Voleur")
    .setColor(0x991928)
    .setDescription("Le voleur est discret, et peut même se rendre invisible, faites attention à vos bourses !")
    .addField("Mana :", "70")
    .addField("Armes :", "Poignard")
    .addField("Pouvoir :", "Invisibilité (30 Mana)")

  message.channel.send(emb6).then(msg => {message.channel.send(emb7);}).then(msg => {message.channel.send(emb8);}).then(msg => {message.channel.send(emb9);}).then(msg => {message.channel.send(emb10);});
  // Envoi de tout les embeds
  }

  if (message.content === prefix + "carac") { // Commande d'aide sur les caractéristique des personnages
    message.delete(); // Supression de la commande d'invocation

    let carac = new Discord.RichEmbed({}) // Creation de l'embed

    .setTitle("Explication des caratéristiques des personnages")
    .setColor(0x066487)
    .addField("PV", "Ce sont les points de vie du personnages. Si ils tombent à 0, le personnage meurt")
    .addField("Force :", "Il s’agit là de votre force physique, votre puissance musculaire. Plus simplement, elle représente votre capacité à déplacer des lourdes charges, à supporter votre attirail lors des expéditions, à frapper fort… Elle est la caractéristique principale des guerriers. La force sert donc à déterminer l'encombrement maximum que peut transporter votre personnage, les dégâts infligés à votre adversaire quand vous le touchez etc.")
    .addField("Constitution :", "Elle traduit la masse musculaire du personnage et sa résistance physique. C’est donc elle qui reflète votre capacité à encaisser les coups ou à résister à d’éprouvantes conditions physiques. Au-delà de la résistance aux coups physiques, elle détermine également la résistance aux maladies, infections, poisons… C’est cette caractéristique qui est utilisée avec celle de la force pour le calcul des points de vie.")
    .addField("Agilité :", "C'est la vivacité du personnage, ses réflexes, sa coordination, sa dextérité. L’agilité définit l'habileté du personnage, son aptitude à tirer et à toucher, à manipuler les objets ou à chevaucher une créature. Elle influe également sur la vitesse de réaction. Elle représente votre facilité à mouvoir rapidement et de façon précise votre corps. L’agilité est donc fort utile pour le vol mais aussi l'utilisation de certaines armes qui requièrent rapidité et précision. Elle est donc tout aussi importante chez le Chevalier que chez le voleur.")
    .addField("Intelligence :", "L'intelligence est le reflet du potentiel intellectuel et du savoir du personnage : ses connaissances et sa capacité à les utiliser en toute circonstance. Elle définit la mémoire du personnage et lui sert à imaginer des plans, échafauder des théories à partir des éléments recueillis ou de posséder des acquis culturels importants. L’intelligence est primordiale chez les lanceurs de sorts car c’est grâce à son intelligence que le personnage pourra comprendre et mémoriser des sorts.")
    .addField("Intuition :", "Elle représente à la fois perception des choses et les pressentiments. Elle détermine la capacité à sentir les pièges ou à faire les bons choix. L’intuition résume à elle seule la sensibilité des cinq sens du personnage (vue, ouïe, toucher, odorat et goût) et sa capacité à interpréter ce qu'il détecte. Une bonne Perception est utile pour le combat à distance et permet de se sentir à l'aise n'importe où.")
    .addField("Charisme :", "Le charisme détermine la capacité d'un personnage à faire peur ou charmer un animal ou un individu, représente la prestance. Il représente le fait que vous impressionnez ou non les gens que vous croisez. Attention, le charisme n'est pas forcément positif. Il peut représenter la beauté chez une jeune danseuse, l’éloquence chez un diplomate, mais également la peur que fait ressentir un tyran.");
    message.channel.send(carac) // Envoi de l'embed
  }


});


function presence(num, bot){ // Fonction du jeu du bot
switch (num) {
  case 0:
    bot.user.setPresence({ game: { name: `Prefix : ${prefix} | ${prefix}help`, type: 0 } });
    break;
  case 1:
    bot.user.setPresence({ game: { name: version, type: 0 } });
    break
  case 2:
    bot.user.setPresence({ game: { name: `6 joueur !`, type: 0 } });
    break
  case 3:
    bot.user.setPresence({ game : { name: `Actuellement sur ${bot.guilds.size} serveurs !`}});
  }
}

function compteurPresence(num){ // Compteur pour changer le jeu du bot
  switch (num) {
    case 0:
      return 1
      break;
    case 1:
      return 2;
      break;
    case 2:
      return 3;
      break;
    case 3:
      return 0;
      break;
  }
}

bot.on("guildCreate", guild => {

if (!guild.channels.find(ch => ch.name === 'bot-logs')) {
  console.log("Le channel existe pas");
  CreateLogsChannel();
  SendUpdateEmbed();
}
else {
  console.log("Le channel existe")
  SendUpdateEmbed();
}

function SendUpdateEmbed() {

let UpdateEm = new Discord.RichEmbed({})
  .setTitle(`Change log ${version}`)
  .setDescription("Update on something");

setTimeout(function(){
    botchannel = guild.channels.find(ch => ch.name === 'bot-logs');
   botchannel.send(UpdateEm);
}, 1500);

}

function CreateLogsChannel() {

guild.createChannel('bot-logs', 'text')
.then(console.log)
.catch(console.error);

}

});
// Fonctions



bot.login(botToken);

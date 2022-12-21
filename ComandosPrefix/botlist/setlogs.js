const Discord = require("discord.js");    
const { QuickDB } = require("quick.db");
const db = new QuickDB()

module.exports = {
 
        aliases: ["slg"],

        

    run: async (client, message, args) => {

let cc = message.mentions.channels.first();
if(!cc) return message.reply
("Você deve marcar o canal!")


        





await db.set(`logs_${message.guild.id}`, cc.id)

let embed = new Discord.EmbedBuilder()
.setTitle("Configurado!")


message.channel.send({embeds: [embed]})


       
    }
}
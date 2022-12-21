const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB()


module.exports = {
 
        aliases: ["ser"],

    run: async (client, message, args) => {

let ha = message.mentions.roles.first();
if(!ha) return message.reply
("Você deve marcar o cargo!")


        





await db.set(`role_${message.guild.id}`, ha.id)

let embed = new Discord.EmbedBuilder()
.setTitle("Configurado!")


message.channel.send({embeds: [embed]})


       
    }
}
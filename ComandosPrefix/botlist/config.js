const Discord = require("discord.js");    
const { QuickDB } = require("quick.db");
const db = new QuickDB()

 

module.exports = {
 
      aliases: ["cfg"],
  
    run: async (client, message, args) => {

        let a = await db.get(`addbot_${message.guild.id}`)
        let b = await db.get(`logs_${message.guild.id}`)
        let c = await db.get(`correio_${message.guild.id}`)
        let v = await db.get(`votos_${message.guild.id}`)
        let r = await db.get(`role_${message.guild.id}`)
        if(!a == null) a = `<#${a}>`
        if(!b == null) b = `<#${b}>`
        if(!c == null) c = `<#${c}>`
        if(!v == null) v = `<#${v}>`
        if(!r == null) r = `<@&${r}>`

        if(a == null) a = "Nada aqui"
        if(b == null) b = "Nada aqui"
        if(c == null) c = "Nada aqui"
        if(v == null) v = "Nada aqui"
        if(r == null) r = "Nada aqui"
        






   
let embed = new Discord.EmbedBuilder()
.setTitle("Painel BotList")
.addFields({name:  `Addbot`, value: `${a}` })
.addFields({name:  `Logs`, value: `${b}` })
.addFields({name:  `Correio`, value: `${c}` })
  .addFields({name:  `Cargo analisador`, value: `${r}` })

message.channel.send({embeds: [embed]})


       
    }
  }
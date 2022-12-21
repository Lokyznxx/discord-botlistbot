const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB()

 
module.exports = {
  
    aliases: ["add"],
  
run: async (client, message, args) => {
  
    let addbot = await db.get(`addbot_${message.guild.id}`)
    const canal = client.channels.cache.get(addbot)
if(!canal) return message.reply("Canal addbot não foi setado!") 


if(message.channel.id == canal.id) {



let logs = await db.get(`logs_${message.guild.id}`)
const l = client.channels.cache.get(logs)
if(!l) return message.reply("Canal logs não foi setado!") 
let correio = await db.get(`correio_${message.guild.id}`)
const cs = client.channels.cache.get(correio)
if(!cs) return message.reply("Canal correio não foi setado!") 


    let embeds = new Discord.EmbedBuilder()
    .setTitle("Olá! Addbot")
.setDescription("Qual o id do seu bot?")
.setColor("#eb4034")

 
 

    message.channel.send({ embeds: [embeds]}).then(msg => {



        let cp = message.channel.createMessageCollector({max: 1})
        .on('collect', c => {
            if(c.author.id == message.author.id) {
            c.delete()
           
            id = c.content
            cp.stop()
            if(id.length > 30) return message.reply({content: "\`|\` O id não pode passar de 30 caracteres"})

   

    const embed = new Discord.EmbedBuilder()
    .setTitle("Olá! Addbot")
      .addFields({name:  `Id`, value: `\`${id}\`` })
    .setDescription("Qual o prefix do seu bot?")
    .setColor("#eb4034")
           msg.edit({ embeds: [embed]}).then(msg2 => {
            if(c.author.id == message.author.id) {
         
                    if(message.author.bot) return;
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        c.delete()
                      
                        cl.stop()
                        prefix = c.content
                        cl.stop()
                        if(prefix.length > 5) return message.reply({content: " \`|\` O prefix não pode passar de 5 caracteres"})


                 
                  
                        const embed = new Discord.EmbedBuilder()
                        .setTitle("Olá! Addbot")                      
                  
.addFields({name:  `prefix`, value: `\`${prefix}\`` })                    
                        .setDescription("Qual a descrição do seu bot?")
                        .setColor("#eb4034")
                       msg.edit({ embeds: [embed]} ).then(msg3 => {
                            if(message.author.bot) return;
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                if(c.author.id == message.author.id) {
                                c.delete()
            
                                ck.stop()
                                if(message.author.bot) return;
                                
                                desc = c.content
                                if(desc.length > 200) return message.reply({content: " \`|\`A desc não pode passar de 200 caracteres"})
    
            
                               msg.delete()
                               let logs = new Discord.EmbedBuilder()
                               .setDescription(`${message.author.username} enviou seu bot para analise`)
                               l.send({ embeds: [logs]})

 
                                let embed = new Discord.EmbedBuilder()
 
                                .setColor("#eb4034")
                                .setTitle("Novo bot!")
          
.addFields({name:  `Id`, value: `\`${id}\`` })
.addFields({name:  `Prefix`, value: `\`${prefix}\`` })        
.addFields({name:  `Descrição`, value: `\`${desc}\`` })                                  
.setDescription(`[adicionar](
https://discord.com/api/oauth2/authorize?client_id=${id}&permissions=8&scope=bot%20applications.commands)`)
                    

 
                                cs.send({ embeds: [embed]} ).then(async (msg) => {

                                    await db.set(`bots_${message.guild.id}_${message.author.id}`, msg.url)
                        
                                    await db.set(`prefix_${message.guild.id}_${id}`, prefix)
                                    await db.set(`desc_${message.guild.id}_${id}`, desc)
                                })

 
                            } 
                            })
                       
                        })
                    })
                }  
                })
            }   
        })
    
})
return


} 
message.reply(`Esse comando só pode ser usado em <#${addbot}>`)

}
 
  }
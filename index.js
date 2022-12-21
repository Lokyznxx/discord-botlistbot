const { GatewayIntentBits, Client, Collection } = require("discord.js")
const config = require("./config.json")
const { QuickDB } = require("quick.db");
const db = new QuickDB()

const client = new Client({ 
  intents: [ 
GatewayIntentBits.Guilds, 
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent, 
GatewayIntentBits.GuildMembers,  
GatewayIntentBits.GuildVoiceStates, 
       ]
    });

module.exports = client;


client.on("messageCreate", message =>{
  if(message.author.bot || !message.guild || !message.content.startsWith(config.prefix)) return;

  const [comando, ...args] = message.content.slice(config.prefix.length).trim().split(/ +/)

  const cmd = client.prefixCommands.get(comando)

  if(!cmd) return message.reply(`Calma ae, esse comando não existe.`)
  
  cmd.run(client, message, args)
})




client.prefixCommands = new Collection();

require("./handler")(client);

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception: " + err);
});
  
process.on("unhandledRejection", (reason, promise) => {
    console.log("[GRAVE] Rejeição possivelmente não tratada em: Promise ", promise, " motivo: ", reason.message);
});

client.login(config.token);
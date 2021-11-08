const Discord = require ("discord.js")
const { version: discordjsVersion } = module.exports = {

  name: "botinfo",

  category: "info",
    aliases: ['uptime', 'botstats', 'stats'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Bot Info`)
            .addField('WebSocket Ping', `${client.ws.ping}ms`, true)
                           .addField('Guild Count', `${client.guilds.cache.size} guilds`, true)
            .addField('Commands', `${client.commands.size}`,true)
            .addField('Node', `v17`, true)
            .addField('Discord.js', `v12`, true)
            .setTimestamp()
        );
    }
}

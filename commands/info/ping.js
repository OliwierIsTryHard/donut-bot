const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pingowanie...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`Ping WebSocket to ${client.ws.ping}MS\nPing edycji wiadomości to ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            await message.channel.send(embed)
            msg.delete()

    }
}

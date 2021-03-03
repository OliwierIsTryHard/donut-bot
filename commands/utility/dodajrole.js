const { Message } = require('discord.js')

module.exports = {
    name : 'dodajrole',
    run : async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Nie Masz **Permisji** aby dac role!')
    const target = message.mentions.members.first()
    if(!target) return message.channel.send('Członek Nie Został Oznaczony!')
    const role = message.mentions.roles.first()
    if(!role) return message.channel.send('Rola Została Nie Oznaczona!')
    await target.roles.add(role)
    message.channel.send(`${target.user.username} Pomyslnie Dostał Rolę!`)
    }
}
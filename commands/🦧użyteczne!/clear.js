const { TeamMember } = require("discord.js")

module.exports = {
name : 'clear',
alliases : ['purge'],
run : async(client, message, args) => {
    if(!args[0]) return message.channel.send('Napisz od 0 do 100 zeby usunąć wiadomośći! ())
}
} 
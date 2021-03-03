const { MessageEmbed } = require ('discord.js')

module.exports ={
    name : 'zapro',
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle(`Donut's Support`)
        .setDescription('https://discord.com/api/oauth2/authorize?client_id=816327109936676864&permissions=8&scope=bot')
        .setFooter('Dodaj Mnie Na Swój Server z linku Powyżej!')
        .setColor('#ff00f2')
        .setThumbnail('https://i.imgur.com/kqqlJpJ.png')

        message.reply(embed)
    }
}
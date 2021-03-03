module.exports = {
    name: 'ban',
    description: 'banuje osoby',
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('Nie Masz **Permisji!** aby zbanować członka!')
        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send('Użytkownik został zbanowany.');
        }else{
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz zbanować!');
        }
    }
}
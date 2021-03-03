module.exports = {
    name: 'kick',
    description: 'kick osoby',
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.channel.send('Nie Masz **Permisji!** aby wyrzucic członka!')
        let member = message.mentions.users.first();
        if(member){
            let memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('Użytkownik został wyrzucony z serwera.');
        }else{
            message.channel.send('Nie oznaczyłeś osoby, którą chcesz wyrzucić z serwera!!');
        }
    }
}
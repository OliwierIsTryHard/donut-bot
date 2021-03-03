const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "pomoc",
  aliases : ['p'],
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {


    const roleColor =
      message.guild.me.displayHexColor === "#ff00f2"
        ? "#ff00f2"
        : message.guild.me.displayHexColor;

    if (!args[0]) {
      let categories = [];

      readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "Brak nazwy komendy.";

          let name = file.name.replace(".js", "");

          return `\`${name}\``;
        });

        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "W trakcie." : cmds.join(" "),
        };

        categories.push(data);
      });

      const embed = new MessageEmbed()
        .setTitle("📬 Potrzebujesz pomocy? Oto wszystkie moje komendy:")
        .addFields(categories)
        .setDescription(
          `Użyj \`${prefix}pomoc\` po którym następuje nazwa komendy, aby uzyskać więcej dodatkowych informacji o komendzie. Na przykład: \`${prefix}pomoc ping\`.`
        )
        .setFooter(
          `Napisane Przez: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Niepoprawna komenda! Użyj \`${prefix}pomoc\` dla wszystkich moich komend!`)
          .setColor("ff00f2");se
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitles("Szczegóły komendy:")
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "KOMENDA:",
          command.name ? `\`${command.name}\`` : "Brak nazwy dla tej komendy."
        )
        .addField(
          "SKRÓTY:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Brak aliasów dla tej komendy!."
        )
        .addField(
          "UŻYCIE:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "OPIS:",
          command.description
            ? command.description
            : "Brak opisu tej komendy."
        )
        .setFooter(
          `Napisane Przez: ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor(roleColor);
      return message.channel.send(embed);
    }
  },
};

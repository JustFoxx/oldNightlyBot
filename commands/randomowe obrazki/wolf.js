const Discord = require("discord.js")
const yiff = require("yiff")
const config = {
    creator: "NightlyFox",
    name: "NightlyBot",
    version: "1.0"
}

module.exports = {
    name: "wolf",
    run: async(client,message,args) => {
        const sheri = new yiff.sheri(config)
        const ee = sheri.wolf.then(e => {
            const embed = new Discord.MessageEmbed()
                .setTitle("Wilczek")
                .setImage(e.url)
                .setTimestamp()
                .setColor("DARK_PURPLE")
                .setFooter("NightlyBot 2020")
            message.reply(embed)
        })
    }
}
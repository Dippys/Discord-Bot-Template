import {EventData} from "../../../web/routes/api/discord";
import {ActionRowBuilder, ButtonBuilder, ButtonStyle, Client, Colors, EmbedBuilder, User} from "discord.js";
import DiscordManager from "../../../lib/discordManager";
import {Event} from "../../types";

const event : Event = {
    name: "application_authorized",

    async execute(event: EventData) {
        const bot: Client<boolean> = DiscordManager.getInstance().getClient();

        const embed: EmbedBuilder = new EmbedBuilder()
            .setTitle("Welcome to Tinder")
            .setDescription("Thanks for installing the Application, There will be a couple handy dandy Buttons you can press under this message to start. If you have any questions, feel free to ask in our Discord server!")
            .setColor(Colors.DarkVividPink)
            .setFooter({iconURL: bot.user?.displayAvatarURL(), text: "Tinder Bot"})
            .setTimestamp();

        const SetupProfileButton: ButtonBuilder = new ButtonBuilder()
            .setCustomId("setup_profile")
            .setLabel("Setup Profile")
            .setStyle(ButtonStyle.Primary);

        const HelpButton: ButtonBuilder = new ButtonBuilder()
            .setURL("https://discord.gg/invite")
            .setLabel("Need Help?")
            .setStyle(ButtonStyle.Link);

        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder<ButtonBuilder>().addComponents(SetupProfileButton, HelpButton);

        try {
            const user: User = await DiscordManager.getInstance().getClient().users.fetch(event.user.id);
            if (!user) {
                console.error('User not found');
                return;
            }

            try {
                await user.send({content: "Welcome to Tinder!", embeds: [embed], components: [row]});
            } catch (error) {
                console.error('Error sending DM:', error);
            }
        } catch (error) {
            console.error("Error sending DM to user:", error);
        }
    }
};

module.exports = event;
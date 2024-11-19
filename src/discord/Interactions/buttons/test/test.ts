import {Button} from "../../../types";
import {ActionRowBuilder, ButtonInteraction, ModalBuilder, TextInputBuilder, TextInputStyle} from "discord.js"

const testButton: Button = {
    customId: "testiawodk",

    async execute(interaction: ButtonInteraction) {
        try {

            const modal : ModalBuilder = new ModalBuilder()
                .setCustomId("testmodal")
                .setTitle("Test Modal");

            const smallinput : TextInputBuilder = new TextInputBuilder()
                .setCustomId("smallinput")
                .setLabel("Small Input")
                .setPlaceholder("This is a small input")
                .setStyle(TextInputStyle.Short);

            const largeinput : TextInputBuilder = new TextInputBuilder()
                .setCustomId("largeinput")
                .setLabel("Large Input")
                .setPlaceholder("This is a large input")
                .setStyle(TextInputStyle.Paragraph);

            const firstActionRow : ActionRowBuilder<TextInputBuilder> = new ActionRowBuilder<TextInputBuilder>().addComponents(smallinput);
            const secondActionRow : ActionRowBuilder<TextInputBuilder> = new ActionRowBuilder<TextInputBuilder>().addComponents(largeinput);

            modal.addComponents(firstActionRow, secondActionRow);

            await interaction.showModal(modal);
        } catch (error) {
            console.error('Error in test button:', error);
            await interaction.reply({
                content: 'An error occurred while processing the button.', ephemeral: true
            });
        }
    }


};

module.exports = testButton;
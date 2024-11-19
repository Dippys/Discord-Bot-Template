import {ContextMenuCommand} from "../../../types";
import {ApplicationCommandType, ContextMenuCommandInteraction} from "discord.js"

const contextMenu: ContextMenuCommand = {
    data: {
        name: 'test', type: ApplicationCommandType.User
    },


    async execute(interaction: ContextMenuCommandInteraction) {
        try {
            await interaction.reply({
                content: 'Test Context Menu Clicked Successfully!', ephemeral: true
            });
        } catch (error) {
            console.error('Error in test context menu:', error);
            await interaction.reply({
                content: 'An error occurred while processing the context menu.', ephemeral: true
            });
        }
    }

}

module.exports = contextMenu;
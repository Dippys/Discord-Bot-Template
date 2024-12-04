import {MessageContextMenuCommand}  from "../../../../types";
import {
    ApplicationCommandType,
    ContextMenuCommandBuilder,
    ContextMenuCommandInteraction,
    InteractionContextType
} from "discord.js"

const contextMenu: MessageContextMenuCommand = {
    data: new ContextMenuCommandBuilder()
        .setName('testificate')
        .setType(ApplicationCommandType.Message)
        .setContexts([InteractionContextType.PrivateChannel, InteractionContextType.BotDM, InteractionContextType.Guild]),


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
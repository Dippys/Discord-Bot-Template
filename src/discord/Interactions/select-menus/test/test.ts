import {SelectMenu} from "../../../types";

const testSelectMenu : SelectMenu = {
    customId: "testselect",

    async execute(interaction) {
        const value : string = interaction.values[0];

        await interaction.reply({
            content: `You selected ${value}`
        });
    }
}

module.exports = testSelectMenu;
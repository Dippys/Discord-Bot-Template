import {Modal} from "../../../types";
import {ModalSubmitInteraction} from "discord.js";

const testModal : Modal = {
    customId: "testmodal",


    async execute(interaction: ModalSubmitInteraction) {


        const smallinput : string = interaction.fields.getTextInputValue("smallinput");
        const largeinput : string  = interaction.fields.getTextInputValue("largeinput");

        await interaction.reply({
            content: `Small Input: ${smallinput}\nLarge Input: ${largeinput}`
        });


    }

}

module.exports = testModal
import {SlashCommandBuilder} from '@discordjs/builders';
import {ChatInputCommandInteraction} from "discord.js";
import {SlashCommand} from "../../../types";

const fruitsCommand: SlashCommand = {
    data: new SlashCommandBuilder()
        .setName('fruits')
        .setDescription('List of fruits')
        .addStringOption(option => option.setName('fruit')
            .setDescription('The fruit to get information about')
            .setAutocomplete(true) // Enable autocomplete
        ), async execute(interaction: ChatInputCommandInteraction) {
        const fruit: string = interaction.options.getString('fruit') as string;
        await interaction.reply(`You selected: ${fruit}`);
    },
};

module.exports = fruitsCommand;
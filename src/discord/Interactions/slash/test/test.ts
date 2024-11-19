import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChatInputCommandInteraction,
    SlashCommandBuilder, StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder
} from 'discord.js';
import {SlashCommand} from '../../../types';

const command: SlashCommand = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'), async execute(interaction: ChatInputCommandInteraction) {


        const button: ButtonBuilder = new ButtonBuilder()
            .setCustomId("testiawodk")
            .setLabel("test")
            .setStyle(ButtonStyle.Primary);

        const row: ActionRowBuilder<ButtonBuilder> = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(button);

        const selectMenu : StringSelectMenuBuilder = new StringSelectMenuBuilder()
            .setCustomId("testselect")
            .setPlaceholder("Select an option")
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Bulbasaur')
                    .setDescription('The dual-type Grass/Poison Seed Pokémon.')
                    .setValue('bulbasaur'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Charmander')
                    .setDescription('The Fire-type Lizard Pokémon.')
                    .setValue('charmander'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Squirtle')
                    .setDescription('The Water-type Tiny Turtle Pokémon.')
                    .setValue('squirtle'),
            );
        const selectRow : ActionRowBuilder<StringSelectMenuBuilder> = new ActionRowBuilder<StringSelectMenuBuilder>()
            .addComponents(selectMenu);


        await interaction.reply({content: "Test", components: [row, selectRow]});
    }
}

module.exports = command;
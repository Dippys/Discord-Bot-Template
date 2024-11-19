import {
    AutocompleteInteraction,
    ButtonInteraction,
    ChatInputCommandInteraction,
    ContextMenuCommandInteraction,
    ModalSubmitInteraction,
    SlashCommandBuilder,
    SlashCommandOptionsOnlyBuilder,
    StringSelectMenuInteraction
} from 'discord.js';
import {EventData} from "../web/routes/api/discord";

export interface SlashCommand {
    data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder; // Ensure it's the full builder type
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
    autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
}

export interface ContextMenuCommand {
    data: contextInteractionCommandData;

    execute: (interaction: ContextMenuCommandInteraction) => Promise<void>;
}

export interface contextInteractionCommandData {
    name: string;
    type: 2 | 3;
}

export interface Button {
    customId: string;
    execute: (interaction: ButtonInteraction) => Promise<void>;
}

export interface Modal {
    customId: string;
    execute: (interaction: ModalSubmitInteraction) => Promise<void>;
}

export interface SelectMenu {
    customId: string;
    execute: (interaction: StringSelectMenuInteraction) => Promise<void>;
}

export interface Autocomplete {
    name: string;
    execute: (interaction: AutocompleteInteraction) => Promise<void>;
}

export interface Event {
    name: string;
    execute: (event: EventData) => Promise<void>;
}
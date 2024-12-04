import {
    AutocompleteInteraction,
    ButtonInteraction,
    ChatInputCommandInteraction,
    ContextMenuCommandBuilder,
    MessageContextMenuCommandInteraction,
    ModalSubmitInteraction,
    SlashCommandBuilder,
    SlashCommandOptionsOnlyBuilder,
    StringSelectMenuInteraction,
    UserContextMenuCommandInteraction
} from 'discord.js';
import {EventData} from "../web/routes/api/discord";

export interface SlashCommand {
    data: SlashCommandBuilder | SlashCommandOptionsOnlyBuilder;
    execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
    autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
}

export interface UserContextMenuCommand {
    data: ContextMenuCommandBuilder;

    execute: (interaction: UserContextMenuCommandInteraction) => Promise<void>;
}

export interface MessageContextMenuCommand {
    data: ContextMenuCommandBuilder;

    execute: (interaction: MessageContextMenuCommandInteraction) => Promise<void>;
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
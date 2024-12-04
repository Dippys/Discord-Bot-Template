import {ApplicationCommandOptionChoiceData, Collection, Interaction, REST, RouteLike, Routes} from 'discord.js';
import fs from 'fs';
import path from 'path';
import {
    Autocomplete, Button, UserContextMenuCommand, MessageContextMenuCommand, Modal, SelectMenu, SlashCommand
} from "./types";
import { RESTPostAPIChatInputApplicationCommandsJSONBody, RESTPostAPIContextMenuApplicationCommandsJSONBody } from 'discord-api-types/v10';

class InteractionHandler {
    public slashCommands: Collection<string, SlashCommand>;
    public buttonCommands: Collection<string, Button>;
    public selectCommands: Collection<string, SelectMenu>;
    public usercontextCommands: Collection<string, UserContextMenuCommand>;
    public messagecontextCommands: Collection<string, MessageContextMenuCommand>;
    public modalCommands: Collection<string, Modal>;
    public autocompleteInteractions: Collection<string, Autocomplete>;
    readonly token: string;
    readonly clientId: string;
    readonly testGuildId: string;
    private rest: REST;
    private readonly interactionsFolder: string;

    constructor(token: string, clientId: string, testGuildId: string) {
        this.token = token;
        this.clientId = clientId;
        this.testGuildId = testGuildId;
        this.interactionsFolder = path.join(__dirname, 'interactions');

        this.slashCommands = new Collection();
        this.buttonCommands = new Collection();
        this.selectCommands = new Collection();
        this.usercontextCommands = new Collection();
        this.messagecontextCommands = new Collection();
        this.modalCommands = new Collection();
        this.autocompleteInteractions = new Collection();

        this.rest = new REST({ version: "10" }).setToken(this.token);
    }

    private getModuleFolders(baseFolder: string): string[] {
        const folders: string[] = [];

        if (!fs.existsSync(baseFolder)) {
            console.warn(`Directory not found: ${baseFolder}`);
            return folders;
        }

        const entries : fs.Dirent[] = fs.readdirSync(baseFolder, { withFileTypes: true });

        entries.forEach((entry : fs.Dirent) : void => {
            if (entry.isDirectory()) {
                const fullPath : string = path.join(baseFolder, entry.name);
                folders.push(fullPath);
            }
        });

        return folders;
    }

    private async loadModulesFromPath<T>(
        basePath: string,
        collection: Collection<string, T>,
        getKey: (module: T) => string,
        type: string
    ): Promise<void> {
        const moduleFolders : string[] = this.getModuleFolders(basePath);

        console.log(`Loading ${type} from ${moduleFolders.length} folders in ${basePath}`);

        for (const folder of moduleFolders) {
            const files : string[] = fs.readdirSync(folder)
                .filter(file => file.endsWith('.ts') || file.endsWith('.js'));

            for (const file of files) {
                try {
                    const filePath : string = path.join(folder, file);
                    const module: T = require(filePath);
                    const key : string = getKey(module);

                    if (key) {
                        collection.set(key, module);
                        console.log(`Loaded ${type}: ${key}`);
                    } else {
                        console.warn(`Invalid ${type} module in ${filePath}: missing required properties`);
                    }
                } catch (error) {
                    console.error(`Error loading ${type} from ${file}:`, error);
                }
            }
        }
    }

    async loadCommands(): Promise<void> {
        await this.loadModulesFromPath(
            path.join(this.interactionsFolder, 'slash'),
            this.slashCommands,
            (module: SlashCommand) => module.data?.name,
            'slash command'
        );
    }

    async loadContextMenus(): Promise<void> {
        await this.loadModulesFromPath(
            path.join(this.interactionsFolder, 'context-menus/user'),
            this.usercontextCommands,
            (module: UserContextMenuCommand): string => module.data?.name,
            'user context menu'
        );

        await this.loadModulesFromPath(
            path.join(this.interactionsFolder, 'context-menus/message'),
            this.messagecontextCommands,
            (module: MessageContextMenuCommand): string => module.data?.name,
            'message context menu'
        );
    }

    async loadAutocompleteInteractions(): Promise<void> {
        await this.loadModulesFromPath(
            path.join(this.interactionsFolder, 'autocomplete'),
            this.autocompleteInteractions,
            (module: Autocomplete) : string => module.name,
            'autocomplete interaction'
        );
    }

    async loadButtonCommands(): Promise<void> {
        await this.loadModulesFromPath(
            path.join(this.interactionsFolder, 'buttons'),
            this.buttonCommands,
            (module: Button) : string  => module.customId,
            'button command'
        );
    }

    async loadModalCommands(): Promise<void> {
        await this.loadModulesFromPath(
            path.join(this.interactionsFolder, 'modals'),
            this.modalCommands,
            (module: Modal) : string  => module.customId,
            'modal command'
        );
    }

    async loadSelectMenus(): Promise<void> {
        await this.loadModulesFromPath(
            path.join(this.interactionsFolder, 'select-menus'),
            this.selectCommands,
            (module: SelectMenu) : string  => module.customId,
            'select menu'
        );
    }

    // Optional method to load all interactions at once
    async loadAllInteractions(): Promise<void> {
        const loadingPromises : Promise<void>[] = [
            this.loadCommands(),
            this.loadContextMenus(),
            this.loadAutocompleteInteractions(),
            this.loadButtonCommands(),
            this.loadModalCommands(),
            this.loadSelectMenus()
        ];

        await Promise.all(loadingPromises);
    }

    async registerInteractions(useGlobalInteractions: boolean = false): Promise<void> {
        try {
            console.log("Started refreshing application (/) commands.");
            console.log(`Registering ${useGlobalInteractions ? "global" : "guild"} commands.`);

            // Log collection sizes
            console.log(`Slash Commands: ${this.slashCommands.size}`);
            console.log(`User Context Commands: ${this.usercontextCommands.size}`);
            console.log(`Message Context Commands: ${this.messagecontextCommands.size}`);
            console.log(`Button Commands: ${this.buttonCommands.size}`);
            console.log(`Modal Commands: ${this.modalCommands.size}`);
            console.log(`Select Menus: ${this.selectCommands.size}`);
            console.log(`Autocomplete Interactions: ${this.autocompleteInteractions.size}`);

            const commandJsonData: object[] = [
                ...Array.from(this.slashCommands.values()).map((c: SlashCommand): RESTPostAPIChatInputApplicationCommandsJSONBody => c.data.toJSON()),
                ...Array.from(this.usercontextCommands.values()).map((c: UserContextMenuCommand): RESTPostAPIContextMenuApplicationCommandsJSONBody => c.data.toJSON()),
                ...Array.from(this.messagecontextCommands.values()).map((c: MessageContextMenuCommand): RESTPostAPIContextMenuApplicationCommandsJSONBody => c.data.toJSON())
            ];

            const route: RouteLike = useGlobalInteractions
                ? Routes.applicationCommands(this.clientId)
                : Routes.applicationGuildCommands(this.clientId, this.testGuildId);

            await this.rest.put(route, { body: commandJsonData });
            console.log("Successfully reloaded application (/) commands.");
        } catch (error) {
            console.error(error);
        }
    }

    public async handleInteraction(interaction: Interaction): Promise<void> {
        try {
            if (interaction.isAutocomplete()) {
                const autocomplete : Autocomplete | undefined = this.autocompleteInteractions.get(interaction.commandName);
                if (autocomplete) {
                    await autocomplete.execute(interaction);
                    return;
                } else {
                    const errors: ApplicationCommandOptionChoiceData[] = [{ name: "Autocomplete not found:", value: interaction.commandName }];
                    await interaction.respond(errors);
                }
            }

            if (interaction.isChatInputCommand()) {
                const command : SlashCommand | undefined = this.slashCommands.get(interaction.commandName);
                if (command) {
                    await command.execute(interaction);
                    return;
                } else {
                    interaction.reply({ content: 'Command not found.', ephemeral: true });
                }
            }

            if (interaction.isButton()) {
                const button : Button | undefined = this.buttonCommands.get(interaction.customId);
                if (button) {
                    await button.execute(interaction);
                    return;
                } else {
                    interaction.reply({ content: 'Button not found.', ephemeral: true });
                }
            }

            if (interaction.isModalSubmit()) {
                const modal : Modal | undefined = this.modalCommands.get(interaction.customId);
                if (modal) {
                    await modal.execute(interaction);
                    return;
                } else {
                    interaction.reply({ content: 'Modal not found.', ephemeral: true });
                }
            }

            if (interaction.isStringSelectMenu()) {
                const selectMenu : SelectMenu | undefined = this.selectCommands.get(interaction.customId);
                if (selectMenu) {
                    await selectMenu.execute(interaction);
                    return;
                } else {
                    interaction.reply({ content: 'Select menu not found.', ephemeral: true });
                }
            }

            if (interaction.isUserContextMenuCommand()) {
                const contextMenu: UserContextMenuCommand | undefined = this.usercontextCommands.get(interaction.commandName);
                if (contextMenu) {
                    await contextMenu.execute(interaction);
                    return;
                } else {
                    interaction.reply({ content: 'User context menu not found.', ephemeral: true });
                }
            }

            if (interaction.isMessageContextMenuCommand()) {
                const contextMenu: MessageContextMenuCommand | undefined = this.messagecontextCommands.get(interaction.commandName);
                if (contextMenu) {
                    await contextMenu.execute(interaction);
                    return;
                } else {
                    interaction.reply({ content: 'Message context menu not found.', ephemeral: true });
                }
            }
        } catch (error) {
            console.error('Interaction handling error:', error);

            try {
                if (interaction.isRepliable()) {
                    if (interaction.deferred) {
                        await interaction.followUp({
                            content: 'There was an error processing your interaction.',
                            ephemeral: true
                        });
                    } else if (!interaction.replied) {
                        await interaction.reply({
                            content: 'There was an error processing your interaction.',
                            ephemeral: true
                        });
                    }
                }
            } catch (replyError) {
                console.error('Error sending error message:', replyError);
            }
        }
    }
}

export default InteractionHandler;
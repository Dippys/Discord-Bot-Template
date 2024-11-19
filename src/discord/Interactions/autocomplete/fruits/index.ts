import {Autocomplete} from "../../../types";
import {AutocompleteFocusedOption, AutocompleteInteraction,} from "discord.js"

const fruitsAutoComplete: Autocomplete = {
    name: "fruits",

    async execute(interaction: AutocompleteInteraction) : Promise<void> {
        const focusedValue: AutocompleteFocusedOption = interaction.options.getFocused(true);

        // get the first 5 fruit as a starting point for the autocomplete
        const fruits: string[] = fruitList.filter(fruit => fruit.toLowerCase().startsWith(focusedValue.value.toLowerCase())).slice(0, 5);

        // if the focusedValue.name is equal to anything in the fruitlist then return the that fruti else return the list of 5 fruits

        let choices: string[] = [];


        if (fruitList.includes(focusedValue.value)) {

            choices.push(focusedValue.value);
        } else {
            choices = fruits;
        }

        await interaction.respond(choices.map(fruit => ({name: fruit, value: fruit})));
    }
};


const fruitList : string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Peach', 'Quince', 'Raspberry', 'Strawberry', 'Tangerine', 'Ugli fruit', 'Vanilla bean', 'Watermelon', 'Xigua', 'Yellow passion fruit', 'Zucchini'];

module.exports = fruitsAutoComplete;
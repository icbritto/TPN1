
// kubejs/client_scripts/worth_tooltips.js
// Adds a tooltip "Worth $" to the vanilla/mod items
ItemEvents.tooltip(event => {

    /*
    // Adds the text 'Worth $' to every iron item
    event.addAdvanced(/minecraft:iron_/, (item, advanced, text) => {
        text.add(1, Text.green('Worth $100'));
    });
    */

    // Adds the text 'Worth $5' to specific tags
    event.addAdvanced('#minecraft:logs_that_burn', (item, advanced, text) => {
        text.add(1, Text.green("Worth $5"));
    });

    
    // Adds the text 'Worth $5' to specific item
    event.addAdvanced('minecraft:copper_ingot', (item, advanced, text) => {
        text.add(1, Text.green("Worth $8"));
    });
    
    event.addAdvanced('minecraft:iron_ingot', (item, advanced, text) => {
        text.add(1, Text.green("Worth $16"));
    });
    
    event.addAdvanced('minecraft:gold_ingot', (item, advanced, text) => {
        text.add(1, Text.green("Worth $24"));
    });
    
    event.addAdvanced('minecraft:netherite_scrap', (item, advanced, text) => {
        text.add(1, Text.green("Worth $200"));
    });
    
    event.addAdvanced('minecraft:netherite_ingot', (item, advanced, text) => {
        text.add(1, Text.green("Worth $1000"));
    });


})


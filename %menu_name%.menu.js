module.exports = {
    menu_id: "%menu_id%",
    menu_value: "%menu_option%",
    description: "Option %menu_option% of menu %menu_id%",
    async execute(interaction, client) {
        return interaction.reply({ content: 'Option %menu_option% was from %menu_id% was selected!', components: [], ephemeral: false });
    }
};
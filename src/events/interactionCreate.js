import chalk from 'chalk';
import { InteractionType } from 'discord.js';
import { ServerSettings } from '../database/schemas/ServerSettings.js';
import { BotStats } from '../database/schemas/BotStats.js';

export const name = 'interactionCreate';
export const once = false;

export async function execute(client, interaction) {
  try {
    if (interaction.type === InteractionType.ApplicationCommand) {
      const command = client.slashCommands.get(interaction.commandName);
      if (!command) return;

      // Check owner only
      if (command.ownerOnly && !client.owners.includes(interaction.user.id)) {
        return interaction.reply({ 
          content: '❌ This command is owner only!', 
          ephemeral: true 
        });
      }

      // Log stats
      const stats = await BotStats.findOne({ botId: client.user.id });
      if (stats) {
        stats.slashCommands += 1;
        stats.totalCommands += 1;
        stats.lastUpdate = new Date();
        await stats.save();
      }

      await command.execute(interaction, client);
      console.log(chalk.cyan(`[SLASH] ${interaction.user.tag} used /${interaction.commandName}`));

    } else if (interaction.isButton() || interaction.isStringSelectMenu()) {
      // Handle components
      const componentId = interaction.customId;
      // Component handling logic here
    }
  } catch (error) {
    console.error(chalk.red(`Error in interactionCreate:`, error));
    if (!interaction.replied) {
      await interaction.reply({ 
        content: '❌ An error occurred!', 
        ephemeral: true 
      }).catch(() => {});
    }
  }
}

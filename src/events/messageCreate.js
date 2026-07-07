import chalk from 'chalk';
import { ChannelType } from 'discord.js';
import { ServerSettings } from '../database/schemas/ServerSettings.js';
import { BotStats } from '../database/schemas/BotStats.js';

export const name = 'messageCreate';
export const once = false;

export async function execute(client, message) {
  if (message.author.bot || message.channel.type === ChannelType.DM) return;

  try {
    // Get server settings
    const settings = await ServerSettings.findOne({ guildId: message.guildId }) || {
      guildId: message.guildId,
      prefix: client.prefix
    };

    // Check for prefix command
    const prefix = settings.prefix || client.prefix;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || 
                    client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    // Check permissions
    if (command.ownerOnly && !client.owners.includes(message.author.id)) {
      return message.reply({ content: '❌ This command is owner only!', ephemeral: true });
    }

    // Log command usage
    const stats = await BotStats.findOne({ botId: client.user.id });
    if (stats) {
      stats.prefixCommands += 1;
      stats.lastUpdate = new Date();
      await stats.save();
    }

    // Execute command
    await command.execute(message, args, client);
    console.log(chalk.yellow(`[PREFIX] ${message.author.tag} used /${commandName}`));

  } catch (error) {
    console.error(chalk.red(`Error in messageCreate:`, error));
    message.reply({ content: '❌ An error occurred while executing the command!', ephemeral: true }).catch(() => {});
  }
}

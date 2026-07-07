import chalk from 'chalk';
import { ServerSettings } from '../database/schemas/ServerSettings.js';
import { EmbedBuilder } from 'discord.js';

export const name = 'guildCreate';
export const once = false;

export async function execute(client, guild) {
  try {
    // Create server settings
    let settings = await ServerSettings.findOne({ guildId: guild.id });
    if (!settings) {
      settings = await ServerSettings.create({
        guildId: guild.id,
        prefix: client.prefix,
        premiumUntil: null,
      });
    }

    console.log(chalk.green(`✓ Joined server: ${guild.name} (${guild.id})`));

    // Log to support server if configured
    if (process.env.LOG_CHANNEL_ID) {
      const logChannel = await client.channels.fetch(process.env.LOG_CHANNEL_ID).catch(() => null);
      if (logChannel) {
        const embed = new EmbedBuilder()
          .setColor('Green')
          .setTitle('✅ Bot Added to Server')
          .addFields(
            { name: '📍 Server', value: guild.name, inline: true },
            { name: '👥 Members', value: `${guild.memberCount}`, inline: true },
            { name: '🆔 ID', value: guild.id, inline: false },
            { name: '👑 Owner', value: `<@${guild.ownerId}>`, inline: true }
          )
          .setTimestamp();
        await logChannel.send({ embeds: [embed] });
      }
    }
  } catch (error) {
    console.error(chalk.red(`Error in guildCreate:`, error));
  }
}

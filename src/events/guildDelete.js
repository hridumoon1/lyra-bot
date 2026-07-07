import chalk from 'chalk';
import { EmbedBuilder } from 'discord.js';

export const name = 'guildDelete';
export const once = false;

export async function execute(client, guild) {
  try {
    console.log(chalk.yellow(`✗ Left server: ${guild.name} (${guild.id})`));

    // Log to support server if configured
    if (process.env.LOG_CHANNEL_ID) {
      const logChannel = await client.channels.fetch(process.env.LOG_CHANNEL_ID).catch(() => null);
      if (logChannel) {
        const embed = new EmbedBuilder()
          .setColor('Red')
          .setTitle('❌ Bot Removed from Server')
          .addFields(
            { name: '📍 Server', value: guild.name, inline: true },
            { name: '👥 Members', value: `${guild.memberCount}`, inline: true },
            { name: '🆔 ID', value: guild.id, inline: false }
          )
          .setTimestamp();
        await logChannel.send({ embeds: [embed] });
      }
    }
  } catch (error) {
    console.error(chalk.red(`Error in guildDelete:`, error));
  }
}

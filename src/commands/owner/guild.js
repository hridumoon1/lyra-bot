import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'guild';
export const description = 'Get guild info (Owner only)';
export const ownerOnly = true;
export const usage = 'guild [id]';

export async function execute(message, args, client) {
  let guildId = args[0];
  
  if (!guildId) {
    guildId = message.guildId;
  }

  try {
    const guild = await client.guilds.fetch(guildId);
    const embed = CustomEmbedBuilder.info('🏢 Guild Info', '')
      .addFields(
        { name: 'Name', value: guild.name, inline: true },
        { name: 'ID', value: guild.id, inline: true },
        { name: 'Members', value: guild.memberCount.toString(), inline: true },
        { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true },
        { name: 'Created', value: guild.createdAt.toDateString(), inline: true },
        { name: 'Channels', value: guild.channels.cache.size.toString(), inline: true }
      )
      .setThumbnail(guild.iconURL());
    
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Guild not found')] });
  }
}

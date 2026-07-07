import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'serverinfo';
export const description = 'Get server information';
export const cooldown = 5;

export async function execute(message) {
  const guild = message.guild;
  
  const embed = CustomEmbedBuilder.info('Server Information', '')
    .addFields(
      { name: 'Server Name', value: guild.name, inline: true },
      { name: 'Server ID', value: guild.id, inline: true },
      { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true },
      { name: 'Members', value: guild.memberCount.toString(), inline: true },
      { name: 'Channels', value: guild.channels.cache.size.toString(), inline: true },
      { name: 'Roles', value: guild.roles.cache.size.toString(), inline: true },
      { name: 'Created', value: guild.createdAt.toDateString(), inline: true },
      { name: 'Boost Level', value: guild.premiumTier.toString(), inline: true }
    )
    .setThumbnail(guild.iconURL());

  message.reply({ embeds: [embed] });
}

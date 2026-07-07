import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'report';
export const description = 'Report a user';
export const usage = 'report <user> <reason>';
export const cooldown = 30;

export async function execute(message, args) {
  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });
  
  const reason = args.slice(1).join(' ') || 'No reason';
  const channel = message.guild.channels.cache.find(c => c.name === 'reports');
  
  if (!channel) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'No reports channel found')] });
  
  const embed = CustomEmbedBuilder.warning('🚩 Report', reason)
    .addFields(
      { name: 'Reported User', value: user.tag, inline: true },
      { name: 'Reported By', value: message.author.tag, inline: true }
    );
  
  await channel.send({ embeds: [embed] });
  message.reply({ embeds: [CustomEmbedBuilder.success('Reported', 'Report has been sent')] });
}

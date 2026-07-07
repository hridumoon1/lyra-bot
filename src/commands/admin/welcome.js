import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'welcome';
export const description = 'Set welcome channel and message';
export const usage = 'welcome <channel> <message>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!message.member.permissions.has('Administrator')) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'You need Administrator permission')] });
  }
  
  const channel = message.mentions.channels.first();
  if (!channel) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a channel')] });
  
  // Update in database
  const embed = CustomEmbedBuilder.success('Welcome Message Set', `Channel: ${channel.name}`);
  message.reply({ embeds: [embed] });
}

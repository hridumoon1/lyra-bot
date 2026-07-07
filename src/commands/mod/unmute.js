import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'unmute';
export const description = 'Unmute a member';
export const usage = 'unmute <member>';
export const cooldown = 5;

export async function execute(message, args) {
  const member = message.mentions.members.first();
  if (!member) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a member')] });
  
  try {
    await member.timeout(null);
    message.reply({ embeds: [CustomEmbedBuilder.success('Unmuted', `${member.user.tag} has been unmuted`)] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}

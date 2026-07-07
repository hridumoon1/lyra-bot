import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'softban';
export const description = 'Softban a member';
export const usage = 'softban <member> [reason]';
export const cooldown = 5;

export async function execute(message, args) {
  const member = message.mentions.members.first();
  const reason = args.slice(1).join(' ') || 'No reason';
  
  if (!member) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a member')] });
  
  try {
    await message.guild.bans.create(member.user.id, { reason });
    await message.guild.bans.remove(member.user.id);
    message.reply({ embeds: [CustomEmbedBuilder.success('Softbanned', member.user.tag)] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}

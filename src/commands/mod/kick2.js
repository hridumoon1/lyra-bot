import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'kick';
export const description = 'Kick a member';
export const usage = 'kick <member> [reason]';
export const cooldown = 5;

export async function execute(message, args) {
  const member = message.mentions.members.first();
  if (!member) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a member')] });
  
  const reason = args.slice(1).join(' ') || 'No reason';
  try {
    await member.kick(reason);
    message.reply({ embeds: [CustomEmbedBuilder.success('Kicked', `${member.user.tag} has been kicked`)] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}

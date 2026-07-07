import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'unban';
export const description = 'Unban a user';
export const usage = 'unban <user_id>';
export const cooldown = 5;

export async function execute(message, args) {
  const userId = args[0];
  if (!userId) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide user ID')] });
  
  try {
    await message.guild.bans.remove(userId);
    message.reply({ embeds: [CustomEmbedBuilder.success('Unbanned', `User ${userId} has been unbanned`)] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', e.message)] });
  }
}

import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'unfollow';
export const description = 'Unfollow a user';
export const usage = 'unfollow <user>';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });
  const embed = CustomEmbedBuilder.success('Unfollowed', `You unfollowed ${user.username}!`);
  message.reply({ embeds: [embed] });
}

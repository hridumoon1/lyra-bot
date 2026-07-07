import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'follow';
export const description = 'Follow a user';
export const usage = 'follow <user>';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });
  const embed = CustomEmbedBuilder.success('Following', `You are now following ${user.username}!`);
  message.reply({ embeds: [embed] });
}

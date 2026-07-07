import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'followers';
export const description = 'View your followers';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first() || message.author;
  const embed = CustomEmbedBuilder.info(`${user.username}'s Followers`, '10 followers');
  message.reply({ embeds: [embed] });
}

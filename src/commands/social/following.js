import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'following';
export const description = 'View who you follow';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first() || message.author;
  const embed = CustomEmbedBuilder.info(`${user.username}'s Following`, '5 users');
  message.reply({ embeds: [embed] });
}

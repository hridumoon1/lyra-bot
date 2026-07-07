import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'balance';
export const description = 'Check balance';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first() || message.author;
  const embed = CustomEmbedBuilder.info(`${user.username}'s Balance`, '💰 1000 coins');
  message.reply({ embeds: [embed] });
}

import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'gay';
export const description = 'How gay are you?';
export const cooldown = 3;

export async function execute(message) {
  const user = message.mentions.users.first() || message.author;
  const percentage = Math.floor(Math.random() * 100) + 1;
  const embed = CustomEmbedBuilder.info('🏳️‍🌈 Gay Meter', `${user.username} is **${percentage}%** gay`);
  message.reply({ embeds: [embed] });
}

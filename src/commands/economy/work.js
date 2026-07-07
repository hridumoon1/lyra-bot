import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'work';
export const description = 'Work to earn coins';
export const cooldown = 3600;

export async function execute(message) {
  const earnings = Math.floor(Math.random() * 100) + 50;
  const embed = CustomEmbedBuilder.success('Work Complete', `You earned ${earnings} coins!`);
  message.reply({ embeds: [embed] });
}

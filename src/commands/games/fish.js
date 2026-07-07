import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'fish';
export const description = 'Go fishing';
export const cooldown = 5;

export async function execute(message) {
  const fish = ['Bass', 'Salmon', 'Tuna', 'Shark'];
  const caught = fish[Math.floor(Math.random() * fish.length)];
  const embed = CustomEmbedBuilder.success('🎣 Caught', `You caught a ${caught}!`);
  message.reply({ embeds: [embed] });
}

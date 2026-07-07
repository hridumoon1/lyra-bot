import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'mine';
export const description = 'Go mining';
export const cooldown = 5;

export async function execute(message) {
  const ores = ['Coal', 'Iron', 'Gold', 'Diamond'];
  const mined = ores[Math.floor(Math.random() * ores.length)];
  const embed = CustomEmbedBuilder.success('⛏️ Mined', `You mined ${mined}!`);
  message.reply({ embeds: [embed] });
}

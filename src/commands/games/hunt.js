import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'hunt';
export const description = 'Go hunting';
export const cooldown = 5;

export async function execute(message) {
  const animals = ['Deer', 'Rabbit', 'Bear', 'Wolf'];
  const hunted = animals[Math.floor(Math.random() * animals.length)];
  const embed = CustomEmbedBuilder.success('🏹 Hunted', `You hunted a ${hunted}!`);
  message.reply({ embeds: [embed] });
}

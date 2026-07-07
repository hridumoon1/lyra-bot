import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'pet';
export const description = 'Get a virtual pet';
export const cooldown = 5;

export async function execute(message) {
  const pets = ['Cat', 'Dog', 'Dragon', 'Phoenix'];
  const pet = pets[Math.floor(Math.random() * pets.length)];
  const embed = CustomEmbedBuilder.success('🐾 Pet', `Your new pet is a ${pet}!`);
  message.reply({ embeds: [embed] });
}

import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'dog';
export const description = 'Get a random dog image';
export const cooldown = 5;

export async function execute(message) {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    
    const embed = CustomEmbedBuilder.info('🐶 Random Dog', '')
      .setImage(data.message);
    
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Could not fetch dog')] });
  }
}

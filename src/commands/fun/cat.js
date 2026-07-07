import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'cat';
export const description = 'Get a random cat image';
export const cooldown = 5;

export async function execute(message) {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    
    const embed = CustomEmbedBuilder.info('🐱 Random Cat', '')
      .setImage(data[0].url);
    
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Could not fetch cat')] });
  }
}

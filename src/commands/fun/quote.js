import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'quote';
export const description = 'Get a random quote';
export const cooldown = 5;

export async function execute(message) {
  try {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    
    const embed = CustomEmbedBuilder.info('💭 Random Quote', `"${data.content}"\n\n— ${data.author}`);
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Could not fetch quote')] });
  }
}

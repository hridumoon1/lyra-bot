import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'meme';
export const description = 'Get a random meme';
export const cooldown = 5;

export async function execute(message) {
  try {
    const res = await fetch('https://meme-api.com/gimme');
    const data = await res.json();
    
    const embed = CustomEmbedBuilder.info(data.title, '')
      .setImage(data.url)
      .addFields({
        name: 'Subreddit',
        value: data.subreddit,
        inline: true
      });
    
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Could not fetch meme')] });
  }
}

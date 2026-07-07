import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';
import axios from 'axios';

export const name = 'anime';
export const description = 'Search anime';
export const usage = 'anime <name>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide anime name')] });
  
  try {
    const res = await axios.get('https://api.jikan.moe/v4/anime', { params: { query: args.join(' ') } });
    const anime = res.data.data[0];
    
    const embed = CustomEmbedBuilder.info(anime.title, anime.synopsis?.substring(0, 200) || 'No info')
      .addFields(
        { name: 'Score', value: anime.score?.toString() || 'N/A', inline: true },
        { name: 'Episodes', value: anime.episodes?.toString() || 'N/A', inline: true },
        { name: 'Status', value: anime.status || 'N/A', inline: true }
      )
      .setImage(anime.images?.jpg?.image_url);
    
    message.reply({ embeds: [embed] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Anime not found')] });
  }
}

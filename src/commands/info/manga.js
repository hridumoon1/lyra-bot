import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';
import axios from 'axios';

export const name = 'manga';
export const description = 'Search manga';
export const usage = 'manga <name>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide manga name')] });
  
  try {
    const res = await axios.get('https://api.jikan.moe/v4/manga', { params: { query: args.join(' ') } });
    const manga = res.data.data[0];
    
    const embed = CustomEmbedBuilder.info(manga.title, manga.synopsis?.substring(0, 200) || 'No info')
      .addFields(
        { name: 'Score', value: manga.score?.toString() || 'N/A', inline: true },
        { name: 'Chapters', value: manga.chapters?.toString() || 'N/A', inline: true },
        { name: 'Status', value: manga.status || 'N/A', inline: true }
      )
      .setImage(manga.images?.jpg?.image_url);
    
    message.reply({ embeds: [embed] });
  } catch (e) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Manga not found')] });
  }
}

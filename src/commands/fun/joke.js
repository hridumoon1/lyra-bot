import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';
import axios from 'axios';

export const name = 'joke';
export const description = 'Get a random joke';
export const cooldown = 5;

export async function execute(message) {
  try {
    const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const embed = CustomEmbedBuilder.info('😂 Random Joke', res.data.joke)
      .addFields({ name: 'Punchline', value: res.data.punchline });
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Could not fetch joke')] });
  }
}

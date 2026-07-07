import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';
import axios from 'axios';

export const name = 'urban';
export const description = 'Get word definition from Urban Dictionary';
export const usage = 'urban <word>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please specify a word')] });
  }

  const word = args.join(' ');
  try {
    const res = await axios.get(`https://api.urbandictionary.com/v0/define?term=${word}`);
    if (!res.data.list.length) {
      return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Word not found')] });
    }
    
    const definition = res.data.list[0];
    const embed = CustomEmbedBuilder.info(`📖 ${word}`, definition.definition.substring(0, 1024))
      .addFields({
        name: 'Example',
        value: definition.example.substring(0, 1024) || 'No example'
      });
    
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Could not fetch definition')] });
  }
}

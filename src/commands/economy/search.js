import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'search';
export const description = 'Search for coins';
export const cooldown = 600;

export async function execute(message) {
  const locations = ['under couch', 'in trash', 'at park'];
  const location = locations[Math.floor(Math.random() * locations.length)];
  const amount = Math.floor(Math.random() * 100) + 20;
  const embed = CustomEmbedBuilder.success('Search', `Found ${amount} coins ${location}!`);
  message.reply({ embeds: [embed] });
}

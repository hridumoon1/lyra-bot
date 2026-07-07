import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'adventure';
export const description = 'Go on an adventure';
export const cooldown = 10;

export async function execute(message) {
  const events = ['Found treasure!', 'Met a dragon!', 'Discovered a cave!'];
  const event = events[Math.floor(Math.random() * events.length)];
  const embed = CustomEmbedBuilder.info('🗺️ Adventure', event);
  message.reply({ embeds: [embed] });
}

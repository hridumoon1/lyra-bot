import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'coin';
export const description = 'Flip a coin';
export const aliases = ['flip'];
export const cooldown = 3;

export async function execute(message) {
  const result = Math.random() > 0.5 ? 'Heads' : 'Tails';
  message.reply({ embeds: [CustomEmbedBuilder.success('🪙 Coin Flip', result)] });
}

import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'penis';
export const description = 'Your penis size 😏';
export const cooldown = 5;

export async function execute(message) {
  const size = '8'.repeat(Math.floor(Math.random() * 20) + 1);
  const embed = CustomEmbedBuilder.info('Penis Size', `${message.author.username}:\n\n${'═'.repeat(Math.floor(Math.random() * 20) + 1)}\n*${size}*`);
  message.reply({ embeds: [embed] });
}

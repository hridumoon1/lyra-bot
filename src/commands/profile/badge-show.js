import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'badge-show';
export const description = 'Show your badges';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.success('Your Badges', '⭐ 💙 🎯');
  message.reply({ embeds: [embed] });
}

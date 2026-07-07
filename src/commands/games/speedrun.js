import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'speedrun';
export const description = 'Speed run game';
export const cooldown = 30;

export async function execute(message) {
  const time = Math.floor(Math.random() * 60) + 10;
  const embed = CustomEmbedBuilder.success('⏱️ Speed Run', `Completed in ${time}s`);
  message.reply({ embeds: [embed] });
}

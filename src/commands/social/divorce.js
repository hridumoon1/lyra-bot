import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'divorce';
export const description = 'Divorce your partner';
export const cooldown = 600;

export async function execute(message) {
  const embed = CustomEmbedBuilder.warning('💔 Divorced', 'You are now single');
  message.reply({ embeds: [embed] });
}

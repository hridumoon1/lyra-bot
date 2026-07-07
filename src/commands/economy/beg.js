import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'beg';
export const description = 'Beg for coins';
export const cooldown = 300;

export async function execute(message) {
  const amount = Math.floor(Math.random() * 50) + 10;
  const embed = CustomEmbedBuilder.info('🙏 Begging', `Someone gave you ${amount} coins!`);
  message.reply({ embeds: [embed] });
}

import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'iq';
export const description = 'Get your IQ';
export const cooldown = 3;

export async function execute(message) {
  const iq = Math.floor(Math.random() * 200) + 1;
  const embed = CustomEmbedBuilder.success('IQ Test Result', `${message.author.username}'s IQ: **${iq}**`);
  message.reply({ embeds: [embed] });
}

import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'rate';
export const description = 'Rate something';
export const usage = 'rate <thing>';
export const cooldown = 3;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please specify what to rate')] });
  }

  const thing = args.join(' ');
  const rating = Math.floor(Math.random() * 10) + 1;
  const embed = CustomEmbedBuilder.info('⭐ Rating', `${thing}: **${rating}/10**`);
  message.reply({ embeds: [embed] });
}

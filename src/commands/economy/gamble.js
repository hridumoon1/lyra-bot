import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'gamble';
export const description = 'Gamble coins';
export const usage = 'gamble <amount>';
export const cooldown = 5;

export async function execute(message, args) {
  const amount = parseInt(args[0]);
  if (!amount) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide amount')] });
  const won = Math.random() > 0.5;
  const embed = won 
    ? CustomEmbedBuilder.success('Won!', `You won ${amount * 2} coins!`)
    : CustomEmbedBuilder.error('Lost', `You lost ${amount} coins`);
  message.reply({ embeds: [embed] });
}

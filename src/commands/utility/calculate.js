import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'calculate';
export const aliases = ['calc'];
export const description = 'Calculate mathematical expressions';
export const usage = 'calculate <expression>';
export const cooldown = 3;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide an expression')] });
  }

  try {
    const expression = args.join('');
    if (!/^[0-9+\-*/(). ]+$/.test(expression)) {
      return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Invalid expression')] });
    }
    
    const result = Function('"use strict"; return (' + expression + ')')();
    const embed = CustomEmbedBuilder.success('Calculation', `${expression} = **${result}**`);
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Invalid expression')] });
  }
}

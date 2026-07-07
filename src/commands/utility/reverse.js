import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'reverse';
export const description = 'Reverse a text';
export const usage = 'reverse <text>';
export const cooldown = 3;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide text')] });
  }

  const text = args.join(' ');
  const reversed = text.split('').reverse().join('');
  message.reply({ embeds: [CustomEmbedBuilder.success('Text Reversed', `\`\`\`${reversed}\`\`\``)] });
}

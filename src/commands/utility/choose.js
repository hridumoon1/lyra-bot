import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'choose';
export const description = 'Choose between options';
export const usage = 'choose <option1> | <option2> | ...';
export const cooldown = 3;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide options separated by |')] });
  }

  const text = args.join(' ');
  const options = text.split('|').map(o => o.trim()).filter(o => o);

  if (options.length < 2) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide at least 2 options')] });
  }

  const chosen = options[Math.floor(Math.random() * options.length)];
  message.reply({ embeds: [CustomEmbedBuilder.success('Chosen', chosen)] });
}

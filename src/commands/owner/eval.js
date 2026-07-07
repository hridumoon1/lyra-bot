import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'eval';
export const description = 'Evaluate code (Owner only)';
export const ownerOnly = true;
export const usage = 'eval <code>';

export async function execute(message, args, client) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide code')] });
  }

  try {
    const code = args.join(' ');
    let output = eval(code);
    
    if (typeof output !== 'string') {
      output = JSON.stringify(output, null, 2);
    }

    const embed = CustomEmbedBuilder.success('Eval Result', `\`\`\`js\n${output}\`\`\``);
    message.reply({ embeds: [embed] });
  } catch (error) {
    message.reply({ embeds: [CustomEmbedBuilder.error('Error', error.message)] });
  }
}

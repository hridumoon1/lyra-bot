import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'ascii';
export const description = 'Convert text to ASCII art';
export const usage = 'ascii <text>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide text')] });
  }

  const text = args.join(' ').substring(0, 10);
  const figlet = require('figlet');
  
  figlet(text, (err, data) => {
    if (err) {
      return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Could not generate ASCII')] });
    }
    message.reply({ content: `\`\`\`${data}\`\`\`` });
  });
}

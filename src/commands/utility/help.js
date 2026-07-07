import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'help';
export const description = 'Show bot commands';
export const cooldown = 5;

export async function execute(message, args, client) {
  const categories = {};
  
  client.commands.forEach(cmd => {
    const category = cmd.category || 'Other';
    if (!categories[category]) categories[category] = [];
    categories[category].push(cmd.name);
  });

  let description = '';
  for (const [category, commands] of Object.entries(categories)) {
    description += `\n**${category}**\n${commands.join(', ')}\n`;
  }

  message.reply({ 
    embeds: [CustomEmbedBuilder.info('Help - Commands', description).setFooter({ text: 'Use !help <command> for more info' })] 
  });
}

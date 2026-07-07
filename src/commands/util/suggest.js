import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'suggest';
export const description = 'Suggest a feature';
export const usage = 'suggest <suggestion>';
export const cooldown = 30;

export async function execute(message, args) {
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide a suggestion')] });
  
  const suggestion = args.join(' ');
  const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
  
  if (!channel) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'No suggestions channel found')] });
  
  const embed = CustomEmbedBuilder.info('💡 Suggestion', suggestion)
    .addFields({ name: 'By', value: message.author.username });
  
  await channel.send({ embeds: [embed] });
  message.reply({ embeds: [CustomEmbedBuilder.success('Sent', 'Your suggestion has been sent')] });
}

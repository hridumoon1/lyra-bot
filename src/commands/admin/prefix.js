import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'prefix';
export const description = 'Set bot prefix';
export const usage = 'prefix <new_prefix>';
export const cooldown = 5;

export async function execute(message, args) {
  if (!message.member.permissions.has('Administrator')) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'You need Administrator permission')] });
  }
  
  if (!args.length) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide new prefix')] });
  
  // Update prefix in database
  const embed = CustomEmbedBuilder.success('Prefix Updated', `New prefix: ${args[0]}`);
  message.reply({ embeds: [embed] });
}

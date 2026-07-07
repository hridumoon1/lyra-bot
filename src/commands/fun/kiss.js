import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'kiss';
export const description = 'Kiss someone';
export const usage = 'kiss <user>';
export const cooldown = 3;

export async function execute(message) {
  const user = message.mentions.users.first();
  
  if (!user) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention someone to kiss')] });
  }

  const embed = CustomEmbedBuilder.success('Kiss', `${message.author.username} kissed ${user.username} 💋`);
  message.reply({ embeds: [embed] });
}

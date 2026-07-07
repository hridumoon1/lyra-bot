import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'bite';
export const description = 'Bite someone';
export const usage = 'bite <user>';
export const cooldown = 3;

export async function execute(message) {
  const user = message.mentions.users.first();
  
  if (!user) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention someone to bite')] });
  }

  const embed = CustomEmbedBuilder.warning('Bite', `${message.author.username} bit ${user.username} 🧛`);
  message.reply({ embeds: [embed] });
}

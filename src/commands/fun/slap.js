import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'slap';
export const description = 'Slap someone';
export const usage = 'slap <user>';
export const cooldown = 3;

export async function execute(message) {
  const user = message.mentions.users.first();
  
  if (!user) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention someone to slap')] });
  }

  const embed = CustomEmbedBuilder.info('Slap', `${message.author.username} slapped ${user.username} 👊`);
  message.reply({ embeds: [embed] });
}

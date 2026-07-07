import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'hug';
export const description = 'Hug someone';
export const usage = 'hug <user>';
export const cooldown = 3;

export async function execute(message) {
  const user = message.mentions.users.first();
  
  if (!user) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention someone to hug')] });
  }

  const embed = CustomEmbedBuilder.success('Hug', `${message.author.username} hugged ${user.username} 🤗`);
  message.reply({ embeds: [embed] });
}

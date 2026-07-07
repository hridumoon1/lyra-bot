import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'avatar';
export const description = 'Get user avatar';
export const usage = 'avatar [user]';
export const cooldown = 3;

export async function execute(message, args) {
  const user = message.mentions.users.first() || message.author;
  const embed = CustomEmbedBuilder.info(`${user.username}'s Avatar`, '')
    .setImage(user.avatarURL({ size: 1024 }))
    .addFields({
      name: 'Download',
      value: `[PNG](${user.avatarURL({ format: 'png', size: 1024 })}) | [JPG](${user.avatarURL({ format: 'jpg', size: 1024 })})`
    });
  
  message.reply({ embeds: [embed] });
}

import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'profile';
export const description = 'View your profile';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first() || message.author;
  const embed = CustomEmbedBuilder.info(`${user.username}'s Profile`, '')
    .addFields(
      { name: 'User ID', value: user.id, inline: true },
      { name: 'Created', value: user.createdAt.toDateString(), inline: true },
      { name: 'Bot', value: user.bot ? 'Yes' : 'No', inline: true }
    )
    .setThumbnail(user.avatarURL());
  message.reply({ embeds: [embed] });
}

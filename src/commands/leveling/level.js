import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'level';
export const description = 'Check your level';
export const cooldown = 5;

export async function execute(message, args) {
  const user = message.mentions.users.first() || message.author;
  const embed = CustomEmbedBuilder.info(`${user.username}'s Level`, 'Level 5')
    .addFields(
      { name: 'XP', value: '500/1000', inline: true },
      { name: 'Rank', value: '#10', inline: true }
    );
  message.reply({ embeds: [embed] });
}

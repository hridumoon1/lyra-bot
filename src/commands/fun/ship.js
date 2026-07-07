import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'ship';
export const description = 'Ship two users';
export const usage = 'ship <user1> <user2>';
export const cooldown = 5;

export async function execute(message, args) {
  const user1 = message.mentions.users.first();
  const user2 = message.mentions.users.at(1);

  if (!user1 || !user2) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention two users')] });
  }

  const percentage = Math.floor(Math.random() * 100) + 1;
  let reaction = '❌';
  if (percentage > 70) reaction = '💚';
  else if (percentage > 40) reaction = '💛';
  else reaction = '❌';

  const embed = CustomEmbedBuilder.info(`${reaction} Ship`, `${user1.username} + ${user2.username} = **${percentage}%**`);
  message.reply({ embeds: [embed] });
}

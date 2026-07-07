import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'rob';
export const description = 'Rob someone';
export const usage = 'rob <user>';
export const cooldown = 600;

export async function execute(message, args) {
  const user = message.mentions.users.first();
  if (!user) return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please mention a user')] });
  const success = Math.random() > 0.5;
  const embed = success
    ? CustomEmbedBuilder.warning('Robbery', `You robbed ${user.username} and got 100 coins!`)
    : CustomEmbedBuilder.error('Failed', `${user.username} caught you!`);
  message.reply({ embeds: [embed] });
}

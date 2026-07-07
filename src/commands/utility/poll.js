import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'poll';
export const description = 'Create a poll';
export const usage = 'poll <question> | <option1> | <option2> | ...';
export const cooldown = 5;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Usage: poll <question> | <option1> | <option2>')] });
  }

  const text = args.join(' ');
  const parts = text.split('|').map(p => p.trim());
  
  if (parts.length < 3) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please provide at least 2 options')] });
  }

  const question = parts[0];
  const options = parts.slice(1);
  const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

  let description = `**${question}**\n\n`;
  options.forEach((opt, i) => {
    description += `${emojis[i]} ${opt}\n`;
  });

  const embed = CustomEmbedBuilder.info('📊 Poll', description);
  const pollMessage = await message.reply({ embeds: [embed] });

  for (let i = 0; i < options.length; i++) {
    await pollMessage.react(emojis[i]);
  }
}

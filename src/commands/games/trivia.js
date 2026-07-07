import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'trivia';
export const description = 'Play trivia';
export const cooldown = 5;

export async function execute(message) {
  const embed = CustomEmbedBuilder.info('❓ Trivia', 'What is the capital of France?\n1️⃣ Paris\n2️⃣ Lyon\n3️⃣ Nice');
  message.reply({ embeds: [embed] });
}

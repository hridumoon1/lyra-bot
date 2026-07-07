import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

const responses = [
  'Yes', 'No', 'Maybe', 'Ask again later', 'Definitely',
  'Without a doubt', 'Don\'t count on it', 'Very doubtful',
  'Signs point to yes', 'It is certain'
];

export const name = '8ball';
export const description = 'Ask the magic 8ball';
export const usage = '8ball <question>';
export const cooldown = 3;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please ask a question')] });
  }

  const answer = responses[Math.floor(Math.random() * responses.length)];
  message.reply({ embeds: [CustomEmbedBuilder.info('🎱 Magic 8Ball', answer)] });
}

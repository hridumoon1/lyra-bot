import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

const rps = ['Rock', 'Paper', 'Scissors'];

export const name = 'rps';
export const description = 'Play Rock Paper Scissors';
export const usage = 'rps <rock|paper|scissors>';
export const cooldown = 3;

export async function execute(message, args) {
  if (!args.length) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please choose: rock, paper, or scissors')] });
  }

  const choices = { rock: 0, paper: 1, scissors: 2 };
  const userChoice = choices[args[0].toLowerCase()];

  if (userChoice === undefined) {
    return message.reply({ embeds: [CustomEmbedBuilder.error('Error', 'Please choose: rock, paper, or scissors')] });
  }

  const botChoice = Math.floor(Math.random() * 3);
  const userMove = rps[userChoice];
  const botMove = rps[botChoice];

  let result = 'Draw! 🤝';
  if ((userChoice + 1) % 3 === botChoice) {
    result = 'You Won! 🎉';
  } else if ((botChoice + 1) % 3 === userChoice) {
    result = 'Bot Won! 🤖';
  }

  const embed = CustomEmbedBuilder.info('Rock Paper Scissors', result)
    .addFields(
      { name: 'Your Choice', value: userMove, inline: true },
      { name: 'Bot Choice', value: botMove, inline: true }
    );

  message.reply({ embeds: [embed] });
}

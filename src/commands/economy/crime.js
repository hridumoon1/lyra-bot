import { CustomEmbedBuilder } from '../../utils/EmbedBuilder.js';

export const name = 'crime';
export const description = 'Commit a crime';
export const cooldown = 600;

export async function execute(message) {
  const crimes = ['robbery', 'fraud', 'hacking'];
  const crime = crimes[Math.floor(Math.random() * crimes.length)];
  const success = Math.random() > 0.5;
  const embed = success
    ? CustomEmbedBuilder.warning('Crime', `You committed ${crime} and earned 500 coins!`)
    : CustomEmbedBuilder.error('Arrested', 'You got caught! Fine: 200 coins');
  message.reply({ embeds: [embed] });
}

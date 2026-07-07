import chalk from 'chalk';

export async function handleError(client, error, context = {}) {
  console.error(chalk.red(`\n${'═'.repeat(50)}`));
  console.error(chalk.red(`ERROR DETAILS:`));
  console.error(chalk.red(`Name: ${error.name}`));
  console.error(chalk.red(`Message: ${error.message}`));
  console.error(chalk.red(`Context: ${JSON.stringify(context)}`));
  console.error(chalk.red(`${'═'.repeat(50)}\n`));

  // Log to error channel if configured
  if (process.env.ERROR_LOG_CHANNEL_ID) {
    try {
      const errorChannel = await client.channels.fetch(process.env.ERROR_LOG_CHANNEL_ID);
      if (errorChannel) {
        const errorMsg = `\`\`\`\nError: ${error.message}\nContext: ${JSON.stringify(context)}\n\`\`\``;
        await errorChannel.send(errorMsg).catch(() => {});
      }
    } catch (e) {
      console.error('Failed to log error to channel:', e);
    }
  }
}

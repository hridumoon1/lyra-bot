import chalk from 'chalk';

export class Logger {
  static log(msg) {
    console.log(chalk.blue(`[LOG] ${new Date().toLocaleTimeString()} - ${msg}`));
  }

  static error(msg, err = '') {
    console.error(chalk.red(`[ERROR] ${new Date().toLocaleTimeString()} - ${msg}${err ? ' - ' + err : ''}`));
  }

  static warn(msg) {
    console.warn(chalk.yellow(`[WARN] ${new Date().toLocaleTimeString()} - ${msg}`));
  }

  static success(msg) {
    console.log(chalk.green(`[SUCCESS] ${new Date().toLocaleTimeString()} - ${msg}`));
  }

  static info(msg) {
    console.log(chalk.cyan(`[INFO] ${new Date().toLocaleTimeString()} - ${msg}`));
  }
}

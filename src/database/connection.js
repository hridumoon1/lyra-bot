import mongoose from 'mongoose';
import chalk from 'chalk';

export async function connectDatabase() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/lyra-bot');
    console.log(chalk.green(`✓ Database connected: ${conn.connection.db.getName()}`));
    return conn;
  } catch (error) {
    console.error(chalk.red(`✗ Database connection failed:`), error);
    process.exit(1);
  }
}

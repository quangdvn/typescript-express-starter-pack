import express from 'express';
import { formatPrice } from './utils/price'; // Normal import

const app = express();

app.get('/', async (req, res) => {
  const chalk = (await import('chalk')).default; // Import with module
  console.log(chalk.blue('Hello World'));
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

import express, { Request, Response } from 'express';

import transactionsRouter from './routers/transactions.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/transactions', transactionsRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;

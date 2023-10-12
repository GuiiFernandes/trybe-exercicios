import { Request, Response } from 'express';

import transactionsService from '../services/transactions.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const list = async (_req: Request, res: Response) => {
  const { status, data } = await transactionsService.list();
  res.status(mapStatusHTTP(status)).json(data);
};

const searchId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, data } = await transactionsService.searchId(Number(id));
  res.status(mapStatusHTTP(status)).json(data);
};

const create = async (req: Request, res: Response) => {
  const { name, price, type, userId } = req.body;
  const { status, data } = await transactionsService.create({ name, price, type, userId });
  res.status(mapStatusHTTP(status)).json(data);
};

export default {
  create,
  list,
  searchId,
};
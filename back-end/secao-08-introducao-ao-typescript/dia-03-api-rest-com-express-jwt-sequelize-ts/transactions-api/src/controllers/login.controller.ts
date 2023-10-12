import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function login(req: Request, res: Response) {
  const { status, data } = await loginService.verifyLogin(req.body);
  res.status(mapStatusHTTP(status)).json(data);
}

export default {
  login,
};
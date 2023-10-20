import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';
import userService from '../services/user.service';

/* Função para extrair o token */
function extractToken(authorization: string) {
  return authorization.split(' ')[1];
}

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token é obrigatório' });
  }

  const token = extractToken(authorization);

  try {
    const decoded = jwtUtil.verify(token);
    const user = await userService.searchEmail(decoded.email);
    if (!user) return res.status(401).json({ message: 'Token inválido' }); 
    
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

export default authMiddleware;
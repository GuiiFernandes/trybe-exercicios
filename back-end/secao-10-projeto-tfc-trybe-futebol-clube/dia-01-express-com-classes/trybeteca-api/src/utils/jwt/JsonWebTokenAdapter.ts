import * as jwt from 'jsonwebtoken';
import { IJwt } from './IJwt';

export default class JsonWebTokenAdapter implements IJwt {
  private jwt = jwt;

  static SECRET = process.env.JWT_TOKEN ?? 'xablau';

  sign(payload: object): string {
    return this.jwt.sign(payload, JsonWebTokenAdapter.SECRET);
  }

  verify(token: string): object {
    return this.jwt.verify(token, JsonWebTokenAdapter.SECRET) as object;
  }
}
import { ICRUDModelReader } from '../ICRUDModel';
import { IUser, IUserReq, IUserResponse } from './IUser';

export type IUserModel = ICRUDModelReader<IUser> & {
  findByEmail(email: string): Promise<IUser | null>,
  create(user: IUserReq): Promise<IUserResponse>,
};

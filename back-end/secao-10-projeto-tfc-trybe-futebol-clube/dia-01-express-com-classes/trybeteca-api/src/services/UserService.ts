import { IUser, IUserResponse } from '../interfaces/users/IUser';
import UserModel from '../models/UserModel';
import { IUserModel } from '../interfaces/users/IUserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class UserService {
  constructor(
    private userModel: IUserModel = new UserModel(),
  ) { }

  public async findAll(): Promise<ServiceResponse<IUserResponse[]>> {
    const allUsers = await this.userModel.findAll();
    const usersReturn = allUsers.map(({ id, name, email }) => ({ id, name, email }));
    return { status: 'SUCCESSFUL', data: usersReturn };
  }

  public async findById(id: number): Promise<ServiceResponse<IUserResponse>> {
    const user = await this.userModel.findById(id);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
    const { name, email } = user as IUser;

    return { status: 'SUCCESSFUL', data: { id, name, email } };
  }
}

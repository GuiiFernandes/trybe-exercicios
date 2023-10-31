import * as bcrypt from 'bcrypt';
import UserModel from '../models/UserModel';
import { IUserModel } from '../interfaces/users/IUserModel';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IToken } from '../interfaces/IToken';
import { IJwt } from '../utils/jwt/IJwt';
import JsonWebTokenAdapter from '../utils/jwt/JsonWebTokenAdapter';

export default class AuthService {
  constructor(
    private userModel: IUserModel = new UserModel(),
    private jwtService: IJwt = new JsonWebTokenAdapter(),
  ) { }

  async login(email: string, password: string): Promise<ServiceResponse<IToken>> {
    const user = await this.userModel.findByEmail(email);
    if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return { 
        status: 'UNAUTHORIZED', 
        data: { 
          message: 'Invalid username or password' } };
    }

    const token = this.jwtService.sign({
      id: user.id,
    });

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
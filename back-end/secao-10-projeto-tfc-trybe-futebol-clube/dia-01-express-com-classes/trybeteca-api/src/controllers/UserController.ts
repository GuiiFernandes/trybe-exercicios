import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import AuthService from '../services/AuthService';

export default class UserController {
  constructor(
    private userService = new UserService(),
    private authService = new AuthService(),
  ) { }

  public async getAllUsers(_req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.userService.findAll();
    return res.status(200).json(serviceResponse.data);
  }

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.userService.findById(Number(req.params.id));

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    return res.status(200).json(serviceResponse.data);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const serviceResponse = await this.userService.create({ name, email, password });
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const serviceResponse = await this.authService.login(email, password);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}

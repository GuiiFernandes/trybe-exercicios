import { Request, Response, NextFunction } from 'express';
import PlantService from '../services/PlantService';

class PlantController {
  private readonly service: PlantService;

  constructor(service: PlantService) {
    this.service = service;
  }

  public async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plants = await this.service.getAll();
      return res.status(200).json(plants);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const plant = await this.service.create(req.body);
      return res.status(201).json(plant);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.params;
      const plant = await this.service.getById(Number(id));
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.params;
      const {
        breed, needsSun, origin, size, waterFrequency,
      } = req.body;
      const plant = await this.service.update({
        id: Number(id), breed, needsSun, origin, size, waterFrequency,
      });
      return res.status(200).json(plant);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { id } = req.params;
      await this.service.removeById(Number(id));
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

export default PlantController;

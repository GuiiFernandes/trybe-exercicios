import NotFound from '../exceptions/NotFound';
import { IModel } from '../models/interfaces/IModel';
import { INewPlant, IPlant } from '../models/interfaces/IPlant';
import { IService } from '../models/interfaces/IService';
import PlantValidate from './validations/PlantValidate';

class PlantService implements IService<IPlant, INewPlant> {
  private readonly model: IModel<IPlant>;

  constructor(model: IModel<IPlant>) {
    this.model = model;
  }

  async getAll(): Promise<IPlant[]> {
    return this.model.getAll();
  }

  async getById(id: number): Promise<IPlant | null> {
    const plant = await this.model.getById(id);
    if (!plant) throw new NotFound('Plant not found');
    return plant;
  }

  async create(plant: INewPlant): Promise<IPlant> {
    PlantValidate.attributes(plant);
    const { needsSun, size } = plant;
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
    return this.model.create({ ...plant, waterFrequency });
  }

  async update(plant: IPlant): Promise<IPlant> {
    const plantExist = await this.model.getById(plant.id);
    if (!plantExist) throw new NotFound('Plant not found');
    PlantValidate.attributes(plant);
    return this.model.update(plant);
  }

  async removeById(id: number): Promise<void> {
    const isRemoved = await this.model.removeById(id);
    if (!isRemoved) throw new NotFound('Plant not found');
  }
}

export default PlantService;

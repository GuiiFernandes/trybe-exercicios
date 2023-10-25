import { HandleFile } from './HandleFile';
import OpsInfo from './OpsInfo';
import { IModel } from './interfaces/IModel';
import { IPlant } from './interfaces/IPlant';

class PlantModel implements IModel<IPlant> {
  private handleFile = new HandleFile();

  private opsInfo = new OpsInfo();

  async getAll(): Promise<IPlant[]> {
    return this.handleFile.readFile<IPlant[]>('plants');
  }

  async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plants = await this.getAll();
    const newId = await this.opsInfo.updateOpsInfo(1);
    plants.push({ id: newId, ...plant });
    await this.handleFile.saveFile('plants', plants);
    return plants[plants.length - 1];
  }

  async getById(id: number): Promise<IPlant | null> {
    const plants = await this.getAll();
    const plant = plants.find((p) => p.id === id);
    return plant || null;
  }

  async update(plant: IPlant): Promise<IPlant> {
    const plants = await this.getAll();
    const plantIndex = plants.findIndex((p) => p.id === plant.id);
    plants[plantIndex] = plant;
    await this.handleFile.saveFile('plants', plants);
    return plant;
  }

  async removeById(id: number): Promise<boolean> {
    const plants = await this.getAll();
    const plantIndex = plants.findIndex((p) => p.id !== id);
    plants.splice(plantIndex, 1);
    await this.handleFile.saveFile('plants', plants);
    return true;
  }
}

export default PlantModel;

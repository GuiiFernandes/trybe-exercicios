import { HandleFile } from './HandleFile';
import IOpsInfo from './interfaces/IOpsInfo';

class OpsInfo {
  private handleFile = new HandleFile();

  async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const opsInfo = await this.handleFile.readFile<IOpsInfo>('opsInfo');
    opsInfo.createdPlants += incrementAmount;

    await this.handleFile.saveFile('opsInfo', opsInfo);

    return opsInfo.createdPlants;
  }
}

export default OpsInfo;

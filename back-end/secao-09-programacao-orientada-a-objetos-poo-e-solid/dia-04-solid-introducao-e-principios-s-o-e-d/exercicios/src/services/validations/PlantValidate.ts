import BadRequest from '../../exceptions/BadRequest';
import { INewPlant } from '../../models/interfaces/IPlant';

export default class ValidatePlant {
  private static validateBreed(breed: string) {
    if (typeof breed !== 'string') throw new BadRequest('Breed must be a string');
  }

  private static validateNeedsSun(needsSun: boolean) {
    if (typeof needsSun !== 'string') throw new BadRequest('Breed must be a string');
  }

  private static validateOrigin(origin: string) {
    if (typeof origin !== 'string') throw new BadRequest('Breed must be a string');
  }

  private static validateSize(size: number) {
    if (typeof size !== 'string') throw new BadRequest('Breed must be a string');
  }

  static attributes({
    breed, needsSun, origin, size,
  }: INewPlant) {
    ValidatePlant.validateBreed(breed);
    ValidatePlant.validateNeedsSun(needsSun);
    ValidatePlant.validateOrigin(origin);
    ValidatePlant.validateSize(size);
  }
}

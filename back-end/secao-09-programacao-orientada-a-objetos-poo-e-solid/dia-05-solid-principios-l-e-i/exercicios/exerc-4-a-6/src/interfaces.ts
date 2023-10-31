export interface ICar {
  drive(): void;
}

export interface IPlane {
  fly(): void;
}

export interface IVehicle extends ICar, IPlane { }
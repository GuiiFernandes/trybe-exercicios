export interface IServiceReader<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | null>
}

export interface IServiceWriter<T, U> {
  create(arg: U): Promise<T>
  update(arg: T): Promise<T>
}
export interface IServiceDelete {
  removeById(id: number): Promise<void>
}

export interface IService<T, U> extends
  IServiceReader<T>,
  IServiceWriter<T, U>,
  IServiceDelete {}

export interface IModelReader<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | null>
}

export interface IModelWriter<T> {
  create(arg: Omit<T, 'id'>): Promise<T>
  update(arg: T): Promise<T>
}
export interface IModelDelete {
  removeById(id: number): Promise<boolean>
}

export interface IModel<T> extends
  IModelReader<T>,
  IModelWriter<T>,
  IModelDelete {}

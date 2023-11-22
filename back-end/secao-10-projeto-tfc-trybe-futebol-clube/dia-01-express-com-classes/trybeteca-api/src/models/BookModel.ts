import { Op } from 'sequelize';
import SequelizeBook from '../database/models/SequelizeBook';
import { IBook } from '../interfaces/books/IBook';
import { IBookModel } from '../interfaces/books/IBookModel';
import { NewEntity } from '../interfaces';

export default class BookModel implements IBookModel {
  private model = SequelizeBook;

  async create(data: NewEntity<IBook>): Promise<IBook> {
    const dbData = await this.model.create(data);

    const { id, title, price, author, isbn }: IBook = dbData;
    return { id, title, price, author, isbn };
  }

  async findAll(): Promise<IBook[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, title, price, author, isbn }) => ({ id, title, price, author, isbn }));
  }

  async findById(id: IBook['id']): Promise<IBook | null> {
    const dbData = await this.model.findByPk(id);
    if (!dbData) return null;

    const { title, price, author, isbn }: IBook = dbData;
    return { id, title, price, author, isbn };
  }

  async update(id: IBook['id'], data: Partial<NewEntity<IBook>>): Promise<IBook | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } });
    if (!affectedRows) return null;
    return this.findById(id);
  }

  async delete(id: IBook['id']): Promise<number> {
    return this.model.destroy({ where: { id } });
  }

  async searchBook(q: string): Promise<IBook[]> {
    const dbData = await this.model.findAll({
      where: { author: { [Op.like]: `%${q}%` } },
    });
    return dbData.map(({ id, title, price, author, isbn }) => ({ id, title, price, author, isbn }));
  }
}
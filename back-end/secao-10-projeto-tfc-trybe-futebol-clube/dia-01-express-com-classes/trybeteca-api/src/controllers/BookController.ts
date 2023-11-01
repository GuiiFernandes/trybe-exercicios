import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import BookService from '../services/BookService';

export default class BookController {
  constructor(
    private bookService = new BookService(),
  ) { }

  public async createBook(req: Request, res: Response) {
    const serviceResponse = await this.bookService.createBook(req.body);
    res.status(201).json(serviceResponse.data);
  }

  public async getAllBooks(_req: Request, res: Response) {
    const serviceResponse = await this.bookService.getAllBooks();
    res.status(200).json(serviceResponse.data);
  }

  public async getBookById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.bookService.getBookById(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  public async updateBook(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const book = req.body;
    const serviceResponse = await this.bookService.updateBook(id, book);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async deleteBook(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const serviceResponse = await this.bookService.deleteBook(id);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  public async searchBook(req: Request, res: Response): Promise<Response> {
    const { q } = req.query;
    const query = typeof q === 'string' ? q : '';
    const serviceResponse = await this.bookService.searchBook(query);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }

  async updateBookDiscount(req: Request, res: Response): Promise<Response> {
    const { discount } = req.body;
    const id = Number(req.params.id);
    const serviceResponse = await this.bookService.updateBookDiscount(id, discount);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json(serviceResponse.data);
  }
}
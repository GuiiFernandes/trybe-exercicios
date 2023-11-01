import { NextFunction, Request, Response } from 'express';

class Validations {
  static validateBook(req: Request, res: Response, next: NextFunction): Response | void {
    const book = req.body;
    const requiredKeys = ['title', 'price', 'author', 'isbn'];
    const notFoundKey = requiredKeys.find((key) => !(key in book));
    if (notFoundKey) {
      return res.status(400).json({ message: `${notFoundKey} is required` });
    }

    next();
  }

  static validateDiscount(req: Request, res: Response, next: NextFunction): Response | void {
    const { discount } = req.body;
    if (discount < 0 || discount > 0.7) {
      return res.status(400).json({ message: 'Discount must be between 0 and 0.7' });
    }
    next();
  }
}

export default Validations;
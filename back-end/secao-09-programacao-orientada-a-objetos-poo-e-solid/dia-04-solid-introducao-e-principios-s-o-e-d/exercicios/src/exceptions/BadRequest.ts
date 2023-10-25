import HttpException from './HttpException';

export default class BadRequest extends HttpException {
  private static status = 400;

  constructor(message: string) {
    super(BadRequest.status, message || 'Bad Request');
  }
}

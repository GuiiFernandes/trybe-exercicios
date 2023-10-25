import HttpException from './HttpException';

export default class NotFound extends HttpException {
  private static status = 404;

  constructor(message: string) {
    super(NotFound.status, message || 'Bad Request');
  }
}

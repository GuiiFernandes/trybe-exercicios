type StatusError = 'INVALID_DATA' | 'NOT_FOUND' | 'UNAUTHORIZED';
type StatusSuccess = 'CREATED' | 'SUCCESS';

export type ServiceResponseError = {
  status: StatusError,
  data: { message: string },
};

export type ServiceResponseSuccess<T> = {
  status: StatusSuccess,
  data: T,
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;
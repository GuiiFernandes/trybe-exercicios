export default (status: string): number => {
  const statusMap: Record<string, number> = {
    SUCCESS: 200,
    CREATED: 201,
    INVALID_DATA: 400,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
  };
  return statusMap[status] ?? 500;
};
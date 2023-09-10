import { User } from "./types/User";

export const getUserNames = (userList: User[]): string[] => userList.map(user => user.name);

export const getUsersByQtdRepo = (userList: User[], qtd: number): string[] => userList
  .filter(user => user.repositories >= qtd).map((user) => user.name);

export const isMostActiveUser = (name: string, userList: User[]): boolean => {
  const mostActiveUser = userList.reduce((prev, curr) => prev.repositories > curr.repositories ? prev : curr);
  return mostActiveUser.name === name;
};
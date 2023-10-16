import TransactionModel, {
  TransactionOptionalFields,
  TransactionTypeModel,
} from '../database/models/transaction.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Transaction } from '../types/Transaction';

const validateParams = (
  { name, price, type, userId }: TransactionOptionalFields,
): string | undefined => {
  if (!name) return 'name is required';
  if (!price) return 'price is required';
  if (!type) return 'type is required';
  if (!userId) return 'userId is required';
};

const list = async (): Promise<ServiceResponse<TransactionTypeModel[]>> => {
  const transactions = await TransactionModel.findAll();
  return { status: 'SUCCESS', data: transactions };
};

const searchId = async (id: number): Promise<ServiceResponse<TransactionTypeModel>> => {
  const transaction = await TransactionModel.findByPk(id);
  if (!transaction) return { status: 'NOT_FOUND', data: { message: 'Transaction not found' } };
  return { status: 'SUCCESS', data: transaction };
};

const create = async (
  transaction: TransactionOptionalFields,
): Promise<ServiceResponse<Transaction>> => {
  const error = validateParams(transaction);
  if (error) return { status: 'INVALID_DATA', data: { message: error } };
  const newTransaction = await TransactionModel.create(transaction);
  return { status: 'CREATED', data: newTransaction.dataValues };
};

export default {
  create,
  list,
  searchId,
};
import { Model, DataTypes, ModelDefined, Optional } from 'sequelize';
import db from './index';

import { Transaction } from '../../types/Transaction';

export type TransactionOptionalFields = Optional<Transaction, 'id'>;

type TransactionSequelizeModel = ModelDefined<Transaction, TransactionOptionalFields>;

export type TransactionTypeModel = Model<Transaction, TransactionOptionalFields>;

const TransactionModel: TransactionSequelizeModel = db.define('Transaction', {
  name: DataTypes.STRING(30),
  price: DataTypes.DECIMAL(10, 2),
  type: DataTypes.STRING,
  userId: DataTypes.INTEGER,
}, {
  tableName: 'transactions',
  timestamps: false,
  underscored: true,
});

export default TransactionModel;
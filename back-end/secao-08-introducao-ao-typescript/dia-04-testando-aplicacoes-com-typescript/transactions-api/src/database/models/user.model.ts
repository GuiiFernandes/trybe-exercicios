import { Model, DataTypes, ModelDefined, Optional } from 'sequelize';
import db from './index';

import { User } from '../../types/User';

export type UserOptionalFields = Optional<User, 'id'>;

type UserSequelizeModel = ModelDefined<User, UserOptionalFields>;

export type UserTypeModel = Model<User, UserOptionalFields>;

const UserModel: UserSequelizeModel = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  name: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;
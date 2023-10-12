import UserModel from '../database/models/user.model';

const searchEmail = async (email: string) => {
  const user = await UserModel.findOne({ where: { email } });
  if (!user) return { status: 'NOT_FOUND', data: { message: 'User not found' } };
  return { status: 'SUCCESS', data: user };
};

export default {
  searchEmail,
};
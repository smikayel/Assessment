import mongoose from "mongoose";
import UserModel from "./user.schema";

// Query all users
export async function getAllUsers() {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

// Query users with specific conditions
export async function getUsersById(id: string) {
  try {
    const users = await UserModel.find({ id });
    return users[0];
  } catch (error) {
    console.error('Error fetching users by id:', error);
    throw error;
  }
}


// Query users with specific conditions
export async function getUsersByEmail(email: string) {
  try {
    const users = await UserModel.find({ email });
    return users[0];
  } catch (error) {
    console.error('Error fetching users by email:', error);
    throw error;
  }
}

export async function changePassword(id: string, newPassword: string, oldPassword: string) {
  try {

    const user = await UserModel.find({ id: id });
    
    if (!user || user[0].password != oldPassword) {
      return 'User not found'
    }
    user[0].password = newPassword;
    await user[0].save();
    return 'password changed successfully';
  } catch (error) {
    console.error('Error on change password', error);
    return 'something went wrong!'
  }
}

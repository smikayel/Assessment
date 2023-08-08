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
export async function getUsersByEmail(email: string) {
  try {
    const users = await UserModel.find({ email });
    return users;
  } catch (error) {
    console.error('Error fetching users by email:', error);
    throw error;
  }
}
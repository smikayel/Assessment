import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import dbConnection from '../database';

interface User extends Document {
  name: string;
  email: string;
  password: string;
  role: string
}

const userSchema = new Schema<User>({
  id: { type: String, required: true, default: uuidv4 },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

const UserModel = dbConnection.model<User>('User', userSchema);

export default UserModel;

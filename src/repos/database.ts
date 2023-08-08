import mongoose, { Connection } from 'mongoose';
import { databaseUrl } from '../constants';

// Connect to the MongoDB database
const dbConnection: Connection = mongoose.createConnection(databaseUrl);

export default dbConnection;

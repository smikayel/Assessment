import dotenv from 'dotenv'

dotenv.config()

export const port = process.env.PORT
export const jwtPrivateKey = process.env.JWT_PRIVATE_KEY
export const databaseUrl = process.env.MONGODB_URL

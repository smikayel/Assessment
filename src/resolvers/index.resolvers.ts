import jwt from 'jsonwebtoken'
import { jwtPrivateKey } from "../constants";
import UserModel from "../repos/userRepo/user.schema";
import { getUsersByEmail, getUsersById } from '../repos/userRepo/user.handler';


export default {
  Query: {
    getUser: async (parent, args, {user}) => {
      let foundedUser = null
      if (user) {
        foundedUser = await getUsersById(user.id)
      }
      return foundedUser
    }
  },
  Mutation: {
    login: async (parent,{ email, password }) => {
      const foundUser = await getUsersByEmail(email)

      if (!foundUser || foundUser.password != password) return "wrong password"
      const {id, name, role } = foundUser
      return jwt.sign(
        {id, name, role },
        jwtPrivateKey,
        {algorithm: 'HS256', subject: `${id}`, expiresIn: '1d'}
      )     
    },
    signUp: async (parent, args) => {
      const { name, email, password } = args;
      try {
        const newUser = new UserModel({
          name,
          email,
          password,
          role: 'user',
        });

        const savedUser = await newUser.save();

        return jwt.sign(
          {id: savedUser.id, name, role: savedUser.role },
          jwtPrivateKey,
          {algorithm: 'HS256', subject: `${savedUser.id}`, expiresIn: '1d'}
        )     

      } catch (error) {
        console.error('Error signing up user:', error);
        throw error;
      }
    },
  },
}

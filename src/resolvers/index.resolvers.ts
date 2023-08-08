import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

import { jwtPrivateKey } from "../constants";
import { users } from "../data";
import UserModel from "../repos/userRepo/user.schema";


export default {
  Query: {
    user(parent, { id }) {
      return users.find(user => user.id === id)
    },
    getUser(parent, args, {user}) {
      let foundedUser = null
      if (user) {
        foundedUser = users.find(({id}) => id === +user.sub)
      }
      return foundedUser
    }
  },
  Mutation: {
    login(parent,{ email, password }) {
      const {id, name, role } = users.find(
        user => user.email === email && user.password === password
      )
      return jwt.sign(
        {id, name, role },
        jwtPrivateKey,
        {algorithm: 'HS256', subject: `${id}`, expiresIn: '1d'}
      )     
    },
    async signUp(parent, {name, email, password }) {
      try {
        const role = 'user'
        const newUser = new UserModel({
          id: uuidv4(),
          name,
          email,
          role,
          password,
        });
    
        const savedUser = await newUser.save();
        return savedUser;
      } catch (err) {
        return err
      }
    }
  }

}

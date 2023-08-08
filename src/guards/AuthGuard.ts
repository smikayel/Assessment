import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { jwtPrivateKey } from '../constants';

interface TokenPayload {
  id: number;
  name: string;
  role: string;
  // add any other properties to the token payload as needed
}

export interface AuthenticatedRequest extends Request {
  user?: TokenPayload;
}

export const WithAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {

  function unauthorized () {
    req.user = null
    next()
  }
  
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    unauthorized()
  }
  try {
    const token = authHeader.split(' ')[1];
    if (!token) {
      unauthorized()
    }
    const decodedToken = jwt.verify(token, jwtPrivateKey) as TokenPayload;
    req.user = decodedToken;
    next();
  } catch (err) {
    unauthorized()
  }
};

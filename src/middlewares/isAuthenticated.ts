import { Payload } from './../Interfaces/user/auth/Payload';
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
// Acessar token JWT
  const authToken = req.headers.authorization;

  if (!authToken) {
    // falhar a requitição
    return res.status(401).end();
  }

  // Validar se token está preenchido
  const [, token] = authToken.split(" ");

  try {
    // Validar se token é válido
    const { sub } = verify(token, process.env.JWT_SECRET as string) as Payload;
    req.user_id = sub;
    return next(); // Continuar a requisição
  } catch (error) {
    return res.send(401).end(error.message);
  }
}


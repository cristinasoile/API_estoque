import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { AuthRequest } from "../../Interfaces/user/auth/AuthRequest";

class AuthUSerService {
  async execute({ email, password }: AuthRequest) {

    // Validar se email e password estão preenchidos
    if (!email) {
      throw new Error("Email precisa ser enviado");
    }
    if (!password) {
      throw new Error("Password precisa ser enviado");
    }

    //Verificar se email existe
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });
    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    // Verificar se senha está correta
    // user.password, pega a senha lá no db
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Wrong Password!")
    }

    const token = sign(
      {
        name: user.name,
        email: user.email
      }, process.env.JWT_SECRET as string, {
        subject: user.id,
        expiresIn: "30d"
      }
    );
      return { token, user}
   }
}

export { AuthUSerService };

import jwt from "jsonwebtoken";
import User, { iUser } from "../models/UserModel";
import { HydratedDocument } from "mongoose";
import bcrypt from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN: number = process.env.JWT_EXPIRES_IN
  ? parseInt(process.env.JWT_EXPIRES_IN)
  : 900; // Besprochen: Fehler Overload

export class AuthService {
  public async signUp(username: string, password: string): Promise<iUser> {
    const newUser = new User({
      username,
      password,
    });
    return await newUser.save();
  }

  public async signIn(username: string, password: string): Promise<string | { error: string }> {
    const user: HydratedDocument<iUser> | null = await User.findOne({
      username,
    });

    if (!user) {
      return { error: "Invalid credentials" };
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return { error: "Invalid credentials" };
  }

    const payload = { _id: user._id };
    const secret = "secret";
    const options: jwt.SignOptions = { expiresIn: JWT_EXPIRES_IN };

    const token: string = jwt.sign(payload, secret, options);

    return token;
  }
}

export default AuthService;

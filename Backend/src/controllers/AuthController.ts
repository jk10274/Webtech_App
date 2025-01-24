import { Request, Response } from "express";
import AuthService from "../services/AuthService";

const authService = new AuthService();

export class AuthController {
  public async signUp(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const user = await authService.signUp(username, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error signing up", error });
    }
  }

  public async signIn(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      const token = await authService.signIn(username, password);
      if (token) {
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error signing in", error });
    }
  }
}

export default AuthController;
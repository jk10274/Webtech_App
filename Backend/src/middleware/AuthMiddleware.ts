import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "No token provided" });
        return;
    }

    const token = authHeader.split(" ")[1];
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not defined");
        }

        const verified = verify(token, secret);
        console.log("Token verified:", verified);
        (req as any).user = verified;
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(400).json({ message: "Invalid token" });
    }
};
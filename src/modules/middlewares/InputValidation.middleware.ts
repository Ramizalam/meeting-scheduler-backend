import { z } from "zod";
import type { NextFunction, Request, Response } from "express";

const schema = z.object({
    email: z.email(),
    password: z.string().min(6),
});


export const InputValidation = (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({ message: "invalid input" });
    }
    next();
}


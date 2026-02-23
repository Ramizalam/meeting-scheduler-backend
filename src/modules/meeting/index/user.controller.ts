import type { Request, Response } from "express";
import { userService } from "../service/user.service.js";



export const register = async (req: Request, res: Response) => {
  try {
    const user = await userService.register(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = await userService.login(req.body);
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await userService.getUserById(req.params.id as string);
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(400).json({ message: error.message });
    }
}

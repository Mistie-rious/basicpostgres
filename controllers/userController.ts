import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
res.json({message: "User registered successfully", data: req.body})
}

export const loginUser = async (req: Request, res: Response) => {
    res.json({message: "User logged in successfully", data: req.body})
}


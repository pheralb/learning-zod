import { Request, Response } from "express";

export const login = (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.send("login...");
  } catch (error) {
    console.log("❌ Server Internal error. Check response.");
    return res.status(500).json(error);
  }
};

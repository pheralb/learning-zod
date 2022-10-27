import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validateSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("❌ Zod validation error. Check response.");
        return res.status(400).json(
          error.issues.map((issue) => ({
            field: issue.path,
            message: issue.message,
          }))
        );
      } else {
        console.log("❌ Server Internal error. Check response.");
        return res.status(500).json(error);
      }
    }
  };

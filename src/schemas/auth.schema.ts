import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email({
      message: "Write a correct email address",
    }),
    password: z.string().min(6, {
      message: "Password too short",
    }),
  }),
});

export type loginType = z.infer<typeof loginSchema>;

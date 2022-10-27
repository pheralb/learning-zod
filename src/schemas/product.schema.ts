import { z } from "zod";

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(3, { message: "Name too short" }),
    price: z.number().min(0, { message: "Price must be positive" }),
  }),
});

export type createProductType = z.infer<typeof createProductSchema>["body"];

export const updateProductSchema = z.object({
  body: z.object({
    name: z.string().min(3, { message: "Name too short" }).optional(),
    price: z.number().min(0, { message: "Price must be positive" }).optional(),
  }),
  params: z.object({
    id: z.string().min(3),
  }),
  query: z.object({
    title: z.string().min(3),
  }),
});

export type updateProductType = z.infer<typeof updateProductSchema>["body"];

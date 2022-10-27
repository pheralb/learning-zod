import { Router } from "express";
import { login } from "@/controllers/auth.controller";
import { validateSchema } from "@/middlewares/validateSchema.middleware";
import { loginSchema } from "@/schemas/auth.schema";

const router = Router();

// Routes =>
router.post("/login", validateSchema(loginSchema), login);

export default router;

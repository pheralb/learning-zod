import express from "express";
import { z, ZodError } from "zod";

const app = express();

// Set the port here =>
const port = 3000;

// Routes =>
const loginSchema = z.object({
  email: z.string().email({
    message: "Write a correct email address",
  }),
  password: z.string().min(6, {
    message: "Password too short",
  }),
});

app.use(express.json());

app.post("/login", (req, res) => {
  try {
    loginSchema.parse(req.body);
    res.send("login");
  } catch (error) {
    if (error instanceof ZodError) {
      console.log("❌ Zod validation error [/login]. Check response.");
      return res.status(400).json(
        error.issues.map((issue) => ({
          field: issue.path,
          message: issue.message,
        }))
      );
    } else {
      console.log("❌ Internal error [/login]. Check response.");
      return res.status(500).json(error);
    }
  }
});

// Initial server =>
app.listen(port);
console.log(
  `🚀 Server listening on port ${port} - URL: http://localhost:${port}`
);

import express from "express";
import authRoutes from "@/routes/auth.routes";
import productRoutes from "@/routes/products.routes";

const app = express();

const port = 3000; // Set the port here.
app.use(express.json());

app.use(authRoutes);
app.use(productRoutes);

// Initial server =>
app.listen(port);
console.log(
  `🚀 Server listening on port ${port} - URL: http://localhost:${port}`
);

import express from "express";
import { userRoutes } from "./routes/user.routes.js";
import { connectDb } from "./db.js";
import { adminRouter } from "./routes/admin.routes.js";

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(adminRouter);

app.listen(3000, () => {
  connectDb();
  console.log("listining");
});

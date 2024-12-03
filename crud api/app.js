import express from "express";
// import { connectDb } from "./db.js";
const app = express();

import { adminRouter } from "./routes/admin.routes.js";
import { connectDb } from "./db.js";

app.use(express.json());
app.use(adminRouter);

app.listen(3000, () => {
  connectDb();
  console.log("lisiting");
});

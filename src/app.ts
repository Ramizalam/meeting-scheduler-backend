import express from "express";
import routes from "./modules/routes/index.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

export default app;
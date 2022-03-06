import express from "express";
import { greatting, giveMeYourName } from "./middlewares/validations.js";
import dotenv from "dotenv";
import { db } from "./models/index.js";
const { sequelize } = db;
// import * as path from 'path';
// https://stackoverflow.com/questions/41553291/can-you-import-nodes-path-module-using-import-path-from-path

dotenv.config();

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

app.use(greatting, giveMeYourName);

app.get("/", (req, res) => {
  res.json({ msg: `Hey ${req.body.name}! 🥰` });
});

app.listen(PORT, async () => {
  console.log(`Servidor activo en puerto ${PORT}`);
  await sequelize.sync({ force: true })
  console.log('DB connection succesfull');
  
});

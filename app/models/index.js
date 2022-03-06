"use strict";

import * as fs from "fs";
import * as path from "path";
import { Sequelize } from "sequelize";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
// https://github.com/nodejs/help/issues/2907
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";

import { settings } from "../../config/database.js";
let config = settings.development;
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
const __dirname = path.dirname(__filename);
// https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope#:~:text=To%20solve%20the%20%22__dirname%20is,directory%20name%20of%20the%20path.
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };

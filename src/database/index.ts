import { Sequelize, Options } from "sequelize"
import models from "./models"
import config from "./config";

const sequelize = new Sequelize(<Options>config)

models.forEach(model => model.createModel(sequelize))

const connectionDb = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true, alter: true });
    } catch (err) {
        console.log('Database error:', err.message);
    }
};

export { sequelize as Database, connectionDb };
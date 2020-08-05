import express from "express";

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classControllers = new ClassesController();
const connectionControllers = new ConnectionsController();

routes.get("/classes", classControllers.index);
routes.post("/classes", classControllers.create);

routes.get("/connections", connectionControllers.index);
routes.post("/connections", connectionControllers.create);


export default routes;

import { Router } from "express";

import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);
routes.post("/items", itemsController.store);
routes.put("/items", itemsController.update);
routes.delete("/items", itemsController.destroy);

routes.get("/points/:id", pointsController.show);
routes.get("/points", pointsController.index);
routes.post("/points", pointsController.store);
routes.put("/points", pointsController.update);
routes.delete("/points", pointsController.destroy);

export default routes;

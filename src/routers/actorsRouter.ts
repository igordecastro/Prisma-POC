import { Router } from "express";
import { validateModel } from "../middlewares/ModelValidation";
import ActorsModel from "../models/actorsModel";
import { listAllActors, postActor, updateActor, deleteActor } from "../controllers"

const actorsRouter = Router();

actorsRouter
  .post("/actors", validateModel(ActorsModel), postActor)
  .put("/actors/:id", validateModel(ActorsModel), updateActor)
  .get("/actors", listAllActors)
  .delete("/actors/:id", deleteActor)

export {
   actorsRouter
}
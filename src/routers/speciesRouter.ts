import { Router } from "express";
import { validateModel } from "../middlewares/ModelValidation";
import speciesModel from "../models/speciesModel";
import { deleteSpecie, listAllSpecies, postSpecie, updateSpecie } from "../controllers/speciesController"
const speciesRouter = Router();

speciesRouter
  .delete("/species/:id", deleteSpecie)
  .get("/species", listAllSpecies)
  .post("/species", validateModel(speciesModel), postSpecie)
  .put("/species/:id", validateModel(speciesModel), updateSpecie)

export {
    speciesRouter
} ;
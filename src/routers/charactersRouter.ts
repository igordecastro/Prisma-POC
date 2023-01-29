import { validateModel } from "../middlewares/ModelValidation";
import CharactersModel from "../models/charactersModel";
import { Router } from "express";
import { listAllCharacters, postCharacter, deleteCharacter } from "../controllers";

const charactersRouter = Router();

charactersRouter
  .get("/characters", listAllCharacters)
  .post("/characters", validateModel(CharactersModel), postCharacter)
  .delete("/characters/:id", deleteCharacter)

export {
    charactersRouter
}
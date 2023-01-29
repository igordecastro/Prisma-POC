import Joi from 'joi';
import {CharacterInput} from "../protocols"

const CharactersModel = Joi.object<CharacterInput>({
  interpreted_by: Joi.number().required(),
  name: Joi.string().min(3).max(50).required(),
  specie: Joi.number().required(),
  status: Joi.string().min(3).max(10).required(),
  victims_count: Joi.number().required(),
});

export default CharactersModel;
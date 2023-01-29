import Joi from "joi";
import { Actor } from "protocols";

const ActorsModel = Joi.object<Actor>({
    age: Joi.number().required(),
    name: Joi.string().min(5).max(40).required(),
    nationality: Joi.string().min(1).max(20).required()
})

export default ActorsModel;
import Joi from "joi";

const speciesModel = Joi.object({
    specie: Joi.string().min(1).max(40).required(),
    strength: Joi.number().min(1).max(10).required()
})

export default speciesModel;
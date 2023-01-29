import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export function validateModel(model: ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = model.validate(req.body, {
            abortEarly: false
        });

        if(!error) {
            next();
        } else {
            res.status(422).send(error.details.map(d => d.message))
        }
    }
}
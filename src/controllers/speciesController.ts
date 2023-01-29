import { Request, Response } from "express";
import { species } from "../repositories/specieRepository";

async function deleteSpecie(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const error = species.deleteSpecie(parseInt(id))

        if(error) {
            return res.status(404).send({message: "Specie not Found!"});
        } else {
            res.sendStatus(200)
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function updateSpecie(req: Request, res: Response) {
    const { id } = req.params;

    try {
        const error = species.updateSpecie(parseInt(id), req.body);

        if(error) {
            return res.status(404).send({ message: "Specie not Found"});
        } else {
            res.sendStatus(200);
        }

    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function listAllSpecies(req: Request, res: Response) {
    try {
        const data = await species.listAllSpecies();
        res.send(data)
    } catch (err) {
        res.status(400).send(err.message);
    }
}

async function postSpecie(req: Request, res: Response) {
    try {
        species.postSpecie(req.body);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export {
    deleteSpecie,
    updateSpecie,
    listAllSpecies,
    postSpecie
}
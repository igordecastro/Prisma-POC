import { actors } from "../repositories/actorsRepository";
import { Request, Response } from "express";

async function postActor(req: Request, res: Response) {
    const actor = req.body
    
    try {
        await actors.postActor(actor)
        res.sendStatus(201);
    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function listAllActors(req: Request, res: Response) {
    try{
        const data = await actors.listAllActors();

        res.status(200).send(data)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function updateActor(req: Request, res: Response) {
    const { id } = req.params;

    try{
        actors.updateActor(parseInt(id), req.body);

        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

async function deleteActor(req: Request, res: Response) {
    const { id } = req.params;

    try {
        actors.deleteActor(parseInt(id));

        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export {
    listAllActors,
    postActor,
    updateActor,
    deleteActor
}
import { characters } from "../repositories/charactersRepository";
import { Request, Response } from "express";

async function listAllCharacters( req: Request, res: Response) {
    try {
        const list = await characters.listAllCharacters()
        res.send(list)
    } catch(err) {
        res.status(500).send(err.message)
    }
}

async function postCharacter(req: Request, res: Response) {
    const body = req.body;
    try {
        await characters.createCharacter(body)
        res.sendStatus(201);

    } catch(err) {
        res.status(500).send(err.message)
    }
}

async function deleteCharacter(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const error = characters.deleteCharacter(parseInt(id));

        if(error) {
            return res.status(404).send({message: "Character does not exist"});
        }
        res.sendStatus(200);

    } catch(err) {
        res.status(500).send(err.message)
    }
}

async function updateCharacter(req: Request, res: Response) {
    const { id } = req.params;

    try{
        characters.updateCharacter(parseInt(id), req.body);

        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export {
    listAllCharacters,
    postCharacter,
    deleteCharacter,
    updateCharacter
}
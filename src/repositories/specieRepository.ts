import { Specie } from "../protocols";
import { prisma } from "../database";

async function verifySpecie(id: number) {
    const specieExists = prisma.public_species.findFirst({
        where: {
            id
        }
    })
    if(!specieExists) {
        const error = true;
        return error
    }
}

async function deleteSpecie(id: number) {
    const error = verifySpecie(id)
    
    if(error) {
        return error
    }

    return await prisma.public_species.delete({
        where: {
            id
        }
    })
}

async function listAllSpecies() {
    return await prisma.public_species.findMany();
}

async function postSpecie(specie: Specie) {
    return await prisma.public_species.create({
        data: specie
    })
}

async function updateSpecie(id: number, specie: Specie) {
    const error = verifySpecie(id)

    if(error) {
        return error
    } else {
        return await prisma.public_species.update({
            where: {
                id
            },
            data: specie
        })
    }
}

export const species = {
    deleteSpecie,
    postSpecie,
    listAllSpecies,
    updateSpecie
}
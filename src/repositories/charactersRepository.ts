import { CharacterInput } from "../protocols";
import { prisma } from "../database";

async function listAllCharacters() {
    const data = prisma.public_characters.findMany();

    return data;
}

async function createCharacter(character: CharacterInput) {
    return await prisma.public_characters.create({
        data: character
    })
}

async function deleteCharacter(characterId: number) {
    const characterExists = await prisma.public_characters.findFirst({
        where: {
            id: characterId
        }
    })

    if(!characterExists) {
        const error = true;

        return error;
    }

    return await prisma.public_characters.delete({
        where: {
            id: characterId,
        }
    })
}

async function updateCharacter(id: number, character: CharacterInput) {
    return await prisma.public_characters.update({
      where: {
        id,
      },
      data: character,
    });
  }

export const characters = {
    createCharacter,
    deleteCharacter,
    listAllCharacters,
    updateCharacter
}
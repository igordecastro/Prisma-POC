import { prisma } from '../database';
import { Actor } from '../protocols';

async function postActor(actor: Actor) {
  return await prisma.public_actors.create({
    data: actor,
  });
}

async function listAllActors() {
  return await prisma.public_actors.findMany();
}

async function updateActor(id: number, actor: Actor) {
  return await prisma.public_actors.update({
    where: {
      id,
    },
    data: actor,
  });
}

async function deleteActor(id: number) {
  const actorExists = await prisma.public_actors.findFirst({
    where: {
      id,
    },
  });

  if (!actorExists) {
    const error = { message: 'Actor is not in database' };

    return error;
  } else {
    return await prisma.public_actors.delete({
      where: {
        id,
      },
    });
  }
}

export const actors = {
  postActor,
  listAllActors,
  updateActor,
  deleteActor,
};

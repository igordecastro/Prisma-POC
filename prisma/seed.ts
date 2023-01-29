import { prisma } from '../src/database';

async function main() {
  await prisma.public_species.createMany({
    data: [
      {
        specie: 'Werewolf',
        strength: 6,
      },
      {
        specie: 'Banshee',
        strength: 8,
      },
      {
        specie: 'Alpha werewolf',
        strength: 8,
      },
      {
        specie: 'SkinWalker',
        strength: 5,
      },
    ],
  });

  await prisma.public_actors.createMany({
    data: [
      {
        age: 31,
        name: "Dylan O'Brien",
        nationality: 'American',
      },
      {
        age: 31,
        name: 'Tyler Posey',
        nationality: 'American',
      },
      {
        age: 37,
        name: 'Crystal Reed',
        nationality: 'American',
      },
      {
        age: 36,
        name: 'Holland Roden',
        nationality: 'American',
      },
    ],
  });

  await prisma.public_characters.create({
    data: {
      name: 'Scott McCall',
      specie: 3,
      status: 'alive',
      victims_count: 0,
      interpreted_by: 2,
    },
  });
}

main()
  .then(() => console.log('Registration successfully done!'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

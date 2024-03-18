import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//  find all
const main = async () => {
  //  findMany
  const getAllData = await prisma.post.findMany();
  console.log(getAllData);

  // findFast, findFastOrThrow
  const findFast = await prisma.post.findFirstOrThrow({
    where: {
      id: 3,
    },
  });

  //  findUnique and findUniqueOrThrow
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 3,
    },
  });
  console.log(findUnique);
};
main();

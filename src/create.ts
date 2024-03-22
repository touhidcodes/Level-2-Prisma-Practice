import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create
  const create = await prisma.post.create({
    data: {
      title: "post title",
      author: "Touhid",
    },
  });

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "post title 1",
        author: "Touhid",
      },
      {
        title: "post title 2",
        author: "TouhidCodes",
      },

      {
        title: "post title 3",
        author: "Touhid Pays",
      },
    ],
  });
};
main();

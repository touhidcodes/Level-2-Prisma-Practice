import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "post title",
      author: "Touhid",
    },
  });
  console.log(result);
};
main();

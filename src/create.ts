import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // --> create

  // const create = await prisma.post.create({
  //   data: {
  //     title: "post title",
  //     author: "Touhid",
  //   },
  // });

  //  --> create many

  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "post title 1",
  //       author: "Touhid",
  //     },
  //     {
  //       title: "post title 2",
  //       author: "TouhidCodes",
  //     },

  //     {
  //       title: "post title 3",
  //       author: "Touhid Pays",
  //     },
  //   ],
  // });

  //  --> create user
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user1",
  //     email: "user2@ph.com",
  //     role: UserRole.user,
  //   },
  // });

  // --> create profile
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio...",
  //     userId: 1,
  //   },
  // });

  // --> create category
  const createCategory = await prisma.category.create({
    data: {
      name: "software engineering",
    },
  });

  // --> create post
  const createPost = await prisma.post.create({
    data: {
      title: "this is title 5",
      content: "this is content of the post. 5",
      authorId: 3,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 3,
          },
          {
            categoryId: 4,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });

  console.log(createPost);
};
main();

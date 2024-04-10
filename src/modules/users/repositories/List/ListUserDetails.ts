import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserDetails(id: string) {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      profileImage: true,
      followedBy: {
        select: {
          followedBy: {
            select: {
              name: true,
            },
          },
        },
      },
      following: {
        select: {
          following: {
            select: {
              name: true,
            },
          },
        },
      },
      decks: {
        select: {
          id: true,
          name: true,
          cards: {
            select: {
              card: true,
              qtd: true,
            },
          },
          colors: true,
        },
      },
    },
  });

  const followedBy = user.followedBy.map(item => item.followedBy.name);
  const following = user.following.map(item => item.following.name);

  const formatedUser = {
    ...user,
    followedBy: followedBy,
    following: following
  }

  return formatedUser;
}

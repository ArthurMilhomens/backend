import { PrismaClient } from "@prisma/client";
import { UserFilter } from "../../model/user";

export async function getUsers({ search = "" }: UserFilter) {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      profileImage: true,
    },
  });

  return users;
}

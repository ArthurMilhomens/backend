import { PrismaClient } from "@prisma/client";
import { UserFilter } from "../../model/user";

const prisma = new PrismaClient();

export async function getUsers({ search = "" }: UserFilter) {

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

import { Token } from "../../../../utils/jwt";
import { getUserDetails } from "../../repositories/List/ListUserDetails";
import { Request, Response } from "express";

const jwt = new Token();

export async function listUserDetails(req: Request, res: Response) {
  const accessToken = req.headers["authorization"];
  const verify: any = await jwt.verifyAccessToken(accessToken);
  const id = req.query.id?.toString();

  if (!verify) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!id) {
    return res.status(400).json({ error: "Id is required" });
  }

  const users = await getUserDetails(id);

  return res.status(200).json(users);
}

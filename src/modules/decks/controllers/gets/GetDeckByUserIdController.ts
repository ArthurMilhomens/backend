import { Request, Response } from "express";
import { getDeckByUserId } from "../../repositories/gets/ListDeckByUserIdRepository";
import { Token } from "../../../../utils/jwt";

const jwt = new Token();

export async function getDeckByUserIdController(req: Request, res: Response) {
  const accessToken = req.headers["authorization"];
  const verify: any = await jwt.verifyAccessToken(accessToken);

  if (!verify) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decks = await getDeckByUserId(verify.payload.id);

  return res.status(200).json(decks);
}

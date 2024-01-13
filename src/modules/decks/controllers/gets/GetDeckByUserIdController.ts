import { Request, Response } from "express";
import { getDeckByUserId } from "../../repositories/ListDeckByUserIdRepository";
import { Token } from "../../../../utils/jwt";

const jwt = new Token();

export async function getDeckByUserIdController(req: Request, res: Response) {
  const accessToken = req.headers["authorization"];
  const verify: any = await jwt.verifyAccessToken(accessToken);

  const decks = await getDeckByUserId(verify.payload.id);

  return res.status(200).json(decks);
}

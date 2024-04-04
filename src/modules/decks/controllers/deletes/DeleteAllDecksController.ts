import { Request, Response } from "express";
import { deleteAllDecks } from "../../repositories/deletes/DeleteAllDecksRepository";
import { Token } from "../../../../utils/jwt";

const jwt = new Token();

export async function deleteAllDecksController(req: Request, res: Response) {
  const accessToken = req.headers["authorization"];
  const verify: any = await jwt.verifyAccessToken(accessToken);

  verify.payload.id && await deleteAllDecks();

  return res.status(200).json({ message: "All decks have been deleted!" });
}

import { Router, Request, Response } from "express";
import { getGames, games } from "../db";

export const index = Router();

index.get("/", async (req: Request, res: Response): Promise<void> => {
  res.set({"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"});
  res.json(JSON.stringify(games.length ? games : await getGames())).status(200);
});

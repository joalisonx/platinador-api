import "dotenv/config";
import { MongoClient } from "mongodb";
import { IGame } from "../utils";

const client = new MongoClient(process.env.DB_URL);
const db = client
  .db(process.env.DB_NAME)
  .collection<IGame>(process.env.DB_COLLECTION);

async function getGames(): Promise<IGame[]> {
  return await db.find().sort({$natural: -1}).toArray() as unknown as IGame[];
}

let games: IGame[] = [];
setInterval(async () => {
  games = await getGames();
}, 5 * 60000);

export { 
  getGames, 
  games 
}
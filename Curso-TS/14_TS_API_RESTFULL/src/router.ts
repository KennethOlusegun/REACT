import { Router, Request, Response } from "express";
import {
  createAnime,
  findAnimeById,
  getAllAnimes,
  removeAnime,
  updateAnime,
} from "./controllers/animeController";

// validations
import { validate } from "./middlewares/handleValidation";
import { animeCreateValidation } from "./middlewares/animeValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working");
  })
  .post("/animes", animeCreateValidation(), validate, createAnime)
  .get("/animes/:id", findAnimeById)
  .get("/animes", getAllAnimes)
  .delete("/animes/:id", removeAnime)
  .patch("/animes/:id", animeCreateValidation(), validate, updateAnime);
import { Request, Response } from "express"

// Model
import { AnimeModel } from "../models/anime"

// Logger
import Logger from "../../config/logger"

export async function createAnime(req:Request, res:Response) {
    try{
        const data = req.body
        const animes = await AnimeModel.create(data)
        return res.status(201).json(animes)
    }catch(e:any){
        Logger.info(`System error: ${e.message}`)
        return res.status(500).json({ error: "Please try again later!" })
    }
}

export async function findAnimeById(req:Request, res:Response) {
    try{
        const id = req.params.id
        const animes = await AnimeModel.findById(id)

        if(!animes){
            return res.status(404).json({ error: "Anime doesn't exist." })
        }
        return res.status(200).json(animes)
    }catch(e:any){
        Logger.info(`System error: ${e.message}`)
    }
}

export async function getAllAnimes(req:Request, res:Response) {
    try{
        const animes = await AnimeModel.find()
        return res.status(200).json(animes)
    }catch(e:any){
        Logger.info(`System error: ${e.message}`)
    }
}

export async function removeAnime(req:Request, res:Response) {
    try{
        const id = req.params.id
        const animes = await AnimeModel.findById(id)

        if(!animes){
            return res.status(404).json({ error: "Anime doesn't exist." })
        }
        await animes.delete()
        return res.status(201).json({ msg: "Film successfully removed!" })
    }catch(e:any){
        Logger.info(`System error: ${e.message}`)
    }
}

export async function updateAnime(req:Request, res:Response) {
    try{
        const id = req.params.id
        const data = req.body
        const animes = await AnimeModel.findById(id)

        if(!animes){
            return res.status(404).json({ error: "Anime doesn't exist." })
        }

        await AnimeModel.updateOne({_id:id}, data)
        return res.status(200).json(data)        
    }catch(e:any){
        Logger.info(`System error: ${e.message}`)
    }
}
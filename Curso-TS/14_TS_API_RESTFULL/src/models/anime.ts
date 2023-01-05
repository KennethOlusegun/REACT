import {model, Schema} from "mongoose"

const animeSchema = new Schema(
    {
        title:{type:String},
        rating:{type:Number},
        description:{type:String},
        creator:{type:String},
        stars:{type:Array},
        poster:{type:String}
    },
    {
        timestamps: true
    }
)

export const AnimeModel = model("Anime", animeSchema)
import { body } from "express-validator"

export const animeCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("Title is mandatory.")
            .isLength({min:5})
            .withMessage("The title must be at least 5 characters long"),
        body("rating")
            .isNumeric()
            .withMessage("The note must be a number")
        .custom((value:number) => {
            if(value < 0 || value > 10){
                throw new Error("The grade must be from 0 to 10")
            }
            return true
        }),
        body("description").isString().withMessage("The description is mandatory"),
        body("creator").isString().withMessage("Creator name is required"),
        body("poster").isURL().withMessage("The image must be a url")
    ]
}
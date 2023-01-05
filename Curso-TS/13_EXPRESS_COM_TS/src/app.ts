// 1-iniciando projeto
// console.log(' Express + TS!')

// 2-init express
import express, { NextFunction, Request, Response } from "express";

const app = express()

// 3-rota com POST
app.use(express.json())

//11-middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path)
    next()
}

app.use(showPath)

app.get("/", (req, res) => {
    return res.send('Hello Express!')
})

// 3-rota com POST
app.post("/api/products", (req, res) => {
    console.log(req.body)
    return res.send('Added product!')
})

// 4-rota para todos os verbos
app.all("/api/products/check", (req, res) => {

    //req.method = VERBO HTTP
    if (req.method === 'POST') {
        return res.send('Inserted some record!')
    } else if (req.method === 'GET') {
        return res.send('Read some record!')
    } else {
        return res.send('We cannot perform this operation!')
    }
})

// 5-interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send('Using interfaces!')
})

// 6-enviando json
app.get("/api/json", (req: Request, res: Response) => {

    return res.json({
        name: "Polo Shirt",
        price: 599.99,
        color: "Blue",
        sizes: ['P', 'M', 'G']
    })
})

// 7-router parameters
app.get("/api/products/:id", (req: Request, res: Response) => {
    console.log(req.params)

    const id = req.params.id

    if (id === "1") {
        const product = {
            id: 1,
            name: "Cap",
            price: 150
        }
        return res.json(product)
    } else {
        return res.send('Product not found!')
    }

    return res.send('Product not found!')
})

// 8-rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params)

    const productId = req.params.id
    const reviewId = req.params.reviewId

    return res.send(`Accessing the product ${productId} review ${reviewId}`)
})

// 9-router handler
app.get("/api/user/:id", getUser)
function getUser(req: Request, res: Response) {
    console.log(`Rescue user with id ${req.params.id}`)

    return res.send('The user has been found!')
}

// 10-middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
        console.log('Access allowed!')
        next()
    } else {
        console.log('Access denied!')
    }
}
app.post("/api/user/:id/access", checkUser, (req: Request, res: Response) => {

    return res.json({ msg: 'Welcome to the administrative area' })
})

// 12-req e res com generics
app.get("/api/user/:id/details/:name", (
    req: Request<{ id: string, name: string }>,
    res: Response<{ status: boolean }>
) => {
    console.log(`ID: ${req.params.id}`)
    console.log(`Name: ${req.params.name}`)

    return res.send({ status:true })
})

// 13-try e catch
app.get("/api/error", (req:Request, res:Response) => {
    
    try{
        throw new Error('Something went wrong')
    }catch(e:any){


        res.status(500).json({msg: e.message})
    }
})

app.listen(3000, () => {
    console.log('TS + Express application working!')
})
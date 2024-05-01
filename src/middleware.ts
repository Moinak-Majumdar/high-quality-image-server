import { NextFunction, Request, Response } from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {

    if (req.path == '/') next()

    const secret = req.query.secret

    if(secret == null) {
        return res.status(400).json({"error": 'The Pixabay secret key is required. You must include a query parameter named "secret" along with your Pixabay secret key.'})
    }

    next()
}

export default middleware
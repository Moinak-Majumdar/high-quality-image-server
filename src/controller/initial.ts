import axios, { AxiosError } from "axios";
import { Request, Response } from "express";
import { Collection } from "../interface/result";
import verifier from "../utils/verifier";

async function initial(req: Request, res: Response) {

    const secret = req.query.secret;
    if (secret == null) {
        return res.status(400).json({ "error": "Secret is missing" });
    }

    const dbSecret = await verifier();
    if (dbSecret != secret) {
        return res.status(400).json({ "error": "Invalid Secret." });
    }

    try {

        const options = {
            url: `https://pixabay.com/api/?key=${process.env.key}&image_type=photo&q=phone%20wallpapers&safesearch=true&orientation=vertical&per_page=200&order=ec`,
            method: 'GET',
        }
        const result = await axios.request(options);

        const images: any[] = result.data['hits'];

        if (images) {
            const collection: Collection[] = [];

            images.forEach((elm) => {
                const web640:string =  elm['webformatURL'];
                const web340 = web640.replace('_640', '_340');
               
                collection.push({
                    id: elm['id'],
                    cdn: elm['previewURL'],
                    web340: web340,
                    web640: web640,
                });
            });

            return res.status(200).json({"items": collection.length, collection});
        }

        return res.status(400).json({"error": "collection is empty"});

    } catch (error) {
        console.log(error);
        if(error instanceof AxiosError) {
            return res.status(error.status??400).json({ "error" : error.message });
        }
        return res.status(400).json({"error": "Unknown error."})
    }

}

export default initial;
import axios, { AxiosError } from "axios";
import { Request, Response } from "express";
import { Collection } from "../interface/result";


async function latest(req: Request, res: Response) {

    const secret = req.query.secret;

    const query_items = ["wallpaper", "background", " ", "mobile wallpaper"];
    const random_q = encodeURIComponent(query_items[Math.floor(Math.random()*query_items.length)]);

    try {

        const options = {
            url: `https://pixabay.com/api/?key=${secret}&q=${random_q}&image_type=photo&order=latest&orientation=vertical&per_page=200`,
            method: 'GET',
        }
        const result = await axios.request(options)

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

            return res.status(200).json({"items": collection.length, "prompt": random_q, collection});
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

export default latest;
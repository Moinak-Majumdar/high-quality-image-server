import { Request, Response } from "express";
import verifier from "../utils/verifier";
import axios, { AxiosError } from "axios";
import { FullImage } from "../interface/result";

async function _fullImage(req: Request, res: Response) {

    const secret = req.query.secret;
    if (secret == null) {
        return res.status(400).json({ "error": "Secret is missing" });
    }

    const dbSecret = await verifier();
    if (dbSecret != secret) {
        return res.status(400).json({ "error": "Invalid Secret." });
    }

    const imageId = req.query.imageId;
    if (imageId == null) {
        return res.status(400).json({ "error": "Image id is missing." })
    }

    try {
        const options = {
            url: `https://pixabay.com/api/?key=${process.env.KEY}&id=${imageId}`,
            method: "GET",
        }

        const result = await axios.request(options);

        if (result) {
            const data = result.data['hits'][0];
            const web640: string = data['webformatURL'];
            const web340 = web640.replace('_640', '_340')

            const fullImage: FullImage = {
                id: data['id'],
                cdn: data['previewURL'],
                web340: web340,
                web640: web640,
                image: data['largeImageURL'],
                imageSize: data['imageSize'],
                tags: data['tags'],
                view: data['views'],
                likes: data['likes'],
                downloads: data['downloads'],
                owner: data['user'],
                ownerDp: data['userImageURL'],
            }

            return res.status(200).json({ fullImage });
        }
        return res.status(400).json({ "error": "No image found with requested id." })

    } catch (error) {
        console.log(error);
        if(error instanceof AxiosError) {
            return res.status(error.status??400).json({ "error" : error.message });
        } 
        
        return res.status(400).json({"error": "Unknown error."});
    }

}

export default _fullImage;
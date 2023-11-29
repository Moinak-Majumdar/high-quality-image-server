import axios, { AxiosError } from "axios";
import { Request, Response } from "express";
import { Collection } from "../interface/result";


async function editorsChoice(req: Request, res: Response) {

    const secret = req.query.secret;
    if (secret == null) {
        return res.status(400).json({ "error": "Pixabay Secret key is missing" });
    }

    try {

        const options = {
            url: `https://pixabay.com/api/?key=${secret}&page=1&per_page=200&image_type=photo&q=%20&order=ec&safesearch=true&orientation=vertical`,
            method: 'GET',
        }
        const result = await axios.request(options);

        let images: any[] = result.data['hits'];
        const total: number = result.data['total'];
     
        if(total > 600) {
            for(let i = 2; i<= 3; i++) {
                const currOption =  {
                    url: `https://pixabay.com/api/?key=${secret}&page=${i}&per_page=200&image_type=photo&q=%20&order=ec&safesearch=true&orientation=vertical`,
                    method:'GET'
                }
                const currResult = await axios.request(currOption);
                images = [...images, ...currResult.data['hits']];
            }
        }

        if (images) {
            const collection: Collection[] = [];

            images.forEach((elm) => {
                const web640: string = elm['webformatURL'];
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

        return res.status(400).json({ "error": "collection is empty" });

    } catch (error) {
        console.log(error);
        if(error instanceof AxiosError) {
            return res.status(error.status??400).json({ "error" : error.message });
        } 
        return res.status(400).json({"error": "Unknown error."})
    }

}

export default editorsChoice;
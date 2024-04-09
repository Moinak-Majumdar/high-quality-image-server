# Api documentation

**Note :** Each endpoint has a query parameter called ```secret``` where you have to pass your pixabay secret key.
```
https://pixel-perks.vercel.app/latest?secret=YOUR-PIXABAY-SECRET-KEY
```
Follow <a href="https://pixabay.com/api/docs/" target="_blank">Pixabay api doc</a> for your secret key and more information.


1. **Get 200 images.**

    ```
    Make a GET request at :
    https://pixel-perks.vercel.app/latest?secret=YOUR-PIXABAY-SECRET
    ```

    *Response body*
    ```
        {
            "items": 200,
            "collection": [
                {
                    "id": number,
                    "cdn":  url,
                    "web340": url,
                    "web640": url,
                },

                ... more data
            ]
        }
    ```

2. **Get 600 images.**
    ```
    Make a GET request at :
    https://pixel-perks.vercel.app/trending?secret=YOUR-PIXABAY-SECRET

    or
    
    https://pixel-perks.vercel.app/editorsChoice?secret=YOUR-PIXABAY-SECRET
    
    ```

    *Response body*
    ```
        {
            "items": 600,
            "prompt": string,
            "collection": [
                {
                    "id": number,
                    "cdn": url,
                    "web340": url,
                    "web640": url,
                },

                ... more data
            ]
        }
    ```

3. **Get 600 images by category.**

    ```
    Make a GET request at :
    https://pixel-perks.vercel.app/categorized?category=nature&isSafe=true&secret=YOUR-PIXABAY-SECRET
    ``` 

    *Response body*
    ```
        {
            "items": 600,
            "collection": [
                {
                    "id": number,
                    "cdn": url,
                    "web340": url,
                    "web640": url,
                },

                ... more data
            ]
        }
    ```

4. **Get detailed image by id**

    ```
    Make a GET request at :
    https://pixel-perks.vercel.app/fullImage?imageId=1234567&secret=YOUR-PIXABAY-SECRET
    ``` 
    *Response body*
    ```
        {
            "fullImage": {
              "id": 123456,
              "cdn": url,
              "web340": url,
              "web640": url,
              "image": url,
              "imageSize": number,
              "tags": string,
              "view": number,
              "likes": number,
              "downloads": number,
              "owner": String,
              "ownerDp": url
            }
        }
    ```
---

### Don't forget to leave a star ⭐.

### Happy coding !!
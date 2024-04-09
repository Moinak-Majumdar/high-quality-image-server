# Pixabay Images

### Powered by Pixabay.com, Fetch upto 600 images from pixabay without signin.

## Deployment 

```
https://pixel-perks.vercel.app
```

## Installation

### optional Steps
1. **Download and install node js.** <a href="https://nodejs.org/en">click here</a>

2. **Install typescript.**
    ```
    npm install --global typescript
    ```
### Required Steps

3. **clone this repository**

4. **Install the dependencies**
    ```
    npm install
    ```

5. **start express server**
    ```
    npm run dev
    ```

### Help <a href='https://blog.logrocket.com/how-to-set-up-node-typescript-express/' target="_blank">create an express app with ts</a>


## Api documentation:

**Note :** Each endpoint has a query parameter called ```secret``` where you have to pass your pixabay secret key.
```
https://pixel-perks.vercel.app/latest?secret=YOUR-PIXABAY-SECRET-KEY
```
Follow <a href="https://pixabay.com/api/docs/" target="_blank">Pixabay api doc</a> for your secret key and more information.


1. **Get 200 images.**

    ```
    make a GET request at :
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
    https://pixel-perks.vercel.app/categorized?category=nature&secret=YOUR-PIXABAY-SECRET
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
    https://pixel-perks.vercel.app/fullImage?imageId=123456&secret=YOUR-PIXABAY-SECRET
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

#### Don't forget to leave a star 👊.
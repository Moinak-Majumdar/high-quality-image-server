# Pixabay Images

### Powered by Pixabay.com, Fetch upto 600 images from pixabay without signin.

## installation

### optional Steps
1. **Download and install node js.** <a href="https://nodejs.org/en">click here</a>

2. **Install typescript.**
    ```
    npm install --global typescript
    ```
### Required Steps

3. **clone this repository**

4. **Create a ```.env``` file, add items like following..**
    ```
    KEY='YOUR PIXABAY API KEY'
    ```
    <i>PS: Each endpoint needs a secret key. visit - to add your custom logic </i>

5. **Install the dependencies**
    ```
    npm install
    ```

6. **start express server**
    ```
    npm run dev
    ```

### Help <a href='https://blog.logrocket.com/how-to-set-up-node-typescript-express/' target="_blank">create an express app with ts</a>


## Api documentation:

1. **Get 200 images.**

    make a GET request at ```/initial``` endpoint.

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

    make a GET request at ```/latest``` or ```/editorsChoice``` endpoint.

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

    make a GET request at ```/categorized?category=nature``` endpoint.  

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

    make a GET request at ```/fullImage?imageId=123456``` endpoint.  

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
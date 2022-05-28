
# IPFS IMAGE UPLOADER

Here you can find a functional IPFS image uploader coded by a lot's of videos on YT, articles on Medium and Documentation




## How to run this project

1. Clone this project using GIT

```bash
  git clone https://github.com/reymundonahuel/ipfs-image-uploader.git
```
2. Then navigate to project folder
```bash
  cd ipfs-image-uploader
```
3. First you have to install all dependencies
```bash
  npm install
```
4. Then, just run the project using
```bash
  npm start
```
5. Now the project it's running. You should look al the CMD console, it's something like this
```bash
  [nodemon] starting `node app.js`
  Server is Running
```
## Testing with POSTMAN
Postman should look something like this

![alt text](https://firebasestorage.googleapis.com/v0/b/linkit-ar.appspot.com/o/imagen_2022-05-28_174101909.png?alt=media&token=c108364d-99d7-4851-ab3d-556b3a2f818a)
*Remember using form data to post image*
*_and of course use a image key as it appear in the image_*

Finally, the response maybe look like this
```bash
  {
  url: "https://ipfs.io/ipfs/YOUR_CID"
  }
```
Now you can just open the URL in browser!

*Happy Codding!*
## Authors

- [@reymundonahuel](https://github.com/reymundonahuel)


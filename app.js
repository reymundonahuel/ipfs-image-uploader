const express = require('express')
const bodyParser = require('body-parser')
const sharp = require('sharp');
const fileupload = require('express-fileupload');
const uploadIPFS = require('./upload-ipfs')
const app = express()
const PATH = 'uploads/'
app.use(bodyParser.urlencoded({extended:true}))

app.post('/upload',fileupload({
    useTempFiles : true,
    tempFileDir : './uploads'
}),async(req,resp)=>{
    try {
        
        const file = req.file

        if (!req.files?.image) {
            resp.json({
                "status":400,
                "message": 'No file provided'
            })
        }else{
           await sharp(req.files.image.tempFilePath).resize(700,400).toFormat('webp')
            .toFile('./uploads/'+req.files.image.name+'.webp').then(()=>{
                let HASH = uploadIPFS(PATH + req.files.image.name,resp,'./uploads/'+req.files.image.name+'.webp')
                console.log('HASH', HASH)
            })
            
           /*  resp.send({
                status:true,
                message: 'File uploadded',
                data: {
                    name: file.originalname,
                    mimetype: file.mimetype,
                    size: file.size
                }
            }) */
        }

    } catch (error) {
        resp.status(500).send(error)
    }
})

app.get('/',async(req,res)=>{
    res.json({
        "status": "Working"
    })
})


app.listen(3000, ()=>{
    console.log('Server is Running')
})

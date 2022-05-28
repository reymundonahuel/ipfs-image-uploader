const fs = require('fs')
const ipfs = require('ipfs-http-client')
const client = ipfs.create('https://ipfs.infura.io:5001/api/v0')


async function uploadIPFS(PATH,RESP,FILE){
    try {
        console.log('ARCHIVO:' , FILE)
        const arch = fs.readFileSync(FILE)
        await client.add({
            path: PATH,
            content: arch
        }).then(res =>{
            console.log('respuesta', res)
            const archivoEditado = FILE.replace("./uploads/",'').replace(' ','%20').replace(".webp",'')
            RESP.json({
                "url": 'https://ipfs.io/ipfs/' + res.cid.toString() + '/' + archivoEditado
            })
            fs.unlink(FILE)
            fs.unlink(PATH)
        })
    } catch (error) {
        console.log(error)
        return false
    }
    return true
}


module.exports = uploadIPFS
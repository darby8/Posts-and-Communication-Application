const {MongoClient} = require('mongodb')
const dotenv =require('dotenv')
dotenv.config()
// const client= new MongoClient("mongodb+srv://Jaiswal63:Jaiswal63@cluster0.wqddpvg.mongodb.net/OurApp?retryWrites=true&w=majority&appName=Cluster0")
const client =new MongoClient(process.env.CONNECTIONSTRING)
async function start(){
    await client.connect()
    module.exports = client
    const app = require('./app')
    app.listen(process.env.PORT)
}
start()
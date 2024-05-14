import express from 'express'
import cors from 'cors'
import mongoose  from 'mongoose'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
const mehsulSchema = new mongoose.Schema({
    name: String,
    price:Number,
    img:String,
    des:String,
})
const mehsulModel = mongoose.model('mehsul', mehsulSchema);

app.get('/mehsul', async(req, res) => {
    const mehsul = await mehsulModel.find()
  res.send(mehsul)
})
app.get('/mehsul/:id', async(req, res) => {
    const {id}=req.params
    const mehsul = await mehsulModel.findById(id)
  res.send(mehsul)
})
app.delete('/mehsul/:id', async(req, res) => {
    const {id}=req.params
    const mehsul = await mehsulModel.findByIdAndDelete(id)
  res.send(mehsul)
})
app.put('/mehsul/:id', async(req, res) => {
    const {id}=req.params
    const body=req.body
    const mehsul = await mehsulModel.findByIdAndUpdate(id,body)
    await mehsul.save()
  res.send(mehsul)
})
app.post('/mehsul', async(req, res) => {
   
    const body=req.body
    const mehsul= new mehsulModel(body)
    await mehsul.save()
  res.send(mehsul)
})
mongoose.connect('mongodb+srv://NiyazovAsad:Niyazovesed2004@ourdb.n1ga79r.mongodb.net/')
  .then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
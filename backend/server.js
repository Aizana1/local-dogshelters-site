import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = 4000
app.use(cors())

mongoose.connect('mongodb://localhost:27017/pets-base', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  gender: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type:String , required: true },
})
const Pet = mongoose.model('Pet', petSchema)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/pets', async (req, res) => {
  let pets = await Pet.find()
   pets = pets.map((el) => el)
res.json(pets)
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
export {Pet, petSchema }

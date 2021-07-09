import express from 'express';
import multer from 'multer';
import {v4 as uuid} from 'uuid';
import path from 'path';
import Pet from './models/Pet.js';

let router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
        // cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
        cb(null, uuidv4() + '-' + fileName)

    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);save
    }
}

let upload = multer({ storage, fileFilter });

router.get('/', async (req, res) => {
  let pets = await Pet.find()
   pets = pets.map((el) => el)
res.json(pets)
})

router.route('/new')
.post(upload.single('picture'), async (req, res) => {
  const url = req.protocol + '://' + req.get('host')

  const name = req.body.name;
  const type = req.body.type;
  const breed = req.body.breed;
  const gender = req.body.gender;
  const age = req.body.age;
  const description = req.body.description;
  const phone = req.body.phone;
  // const picture = req.file.filename;
  const picture = url + '/images/' + req.file.filename;

  const newAddData = {
      name,
      type,
      breed,
      gender,
      age,
      description,
      phone,
      picture
      
  }
// console.log(newAddData)
  const newAdd = await Pet.create(newAddData);

  newAdd.save()
         .then(() => res.json('Add Added'))
         .catch(err => res.status(400).json('Error: ' + err));
});

export default router;
// export {newAdd}

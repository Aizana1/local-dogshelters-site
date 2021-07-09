import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import newAdd from './newAdd.js';
import session from 'express-session';
import User from './models/User.js';
import Pet from './models/Pet.js';

import bcrypt from 'bcrypt'

const app = express()
const port = 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(
  session({
    secret: 'sdsdsa3123s4242343242',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

mongoose.connect('mongodb://localhost:27017/pets-base', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app
  .route('/signup')
  .get((req, res) => {
    console.log(' req.session.user =>', req.session.user);
    res.json({ user: req.session.user });
  })
  .post( async (req, res) => {
    console.log(' BODY =>', req.body);
    const {username, email, password} = req.body
    let user = await User.findOne({email})
    if (user) {
      req.session.user = user;
      return res.json(user)
    }
    user = new User({
      username, 
      email,
      password:  await bcrypt.hash(password, 10)
    })
    await user.save();

        req.session.user = user;
    console.log(' req.session =>', req.session);
    res.redirect('/login')

    //res.json({ username, message: 'Регистрация заверешна успешно' });
  })
  .delete((req, res) => {
    req.session.destroy();
    // res.json({ username: req.session.username });
  });
  app.route('/login')
  .get( (req, res) => {
    console.log(' req.session.GET =>', req.session);
    res.json({ user: req.session.user });
    })
  .post(async (req, res) => {
    const {username, password} = req.body
    console.log('REQ BODY ===> ', req.body)
    const user = await User.findOne({username})
  
    if (!user) {
      console.log(' req.sessionPOST =>', req.session);
     return res.json("Неверный логин или пароль")
    }
    const isMatch = await bcrypt.compare(password, user.password)
    req.session.user = user;
  
    if (isMatch){
      console.log(' req.session =>', req.session);

      return res.status(200).json({message: "Successful login", user: req.session.user})
    } else {
      console.log(' req.session =>', req.session);
      return res.status(200).send({username: req.session.user.username})
    } 
  })
  .delete((req, res) => {
    req.session.destroy();
  });delete
app.get('/pets', async (req, res) => {
  let pets = await Pet.find()
   pets = pets.map((el) => el)
res.json(pets)
})

app.post('/new', (req, res) => {
  console.log(req.body);
  Pet.create(req.body, (err, data) => {
      if(err) return console.log(err);
      res.send(('saved to db: ' + data));
  })
});

//app.use('/pets', newAdd);

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

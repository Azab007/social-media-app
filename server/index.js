const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');
const postRoute = require('./routes/post.js');
const cors = require('cors');
const multer = require("multer");
const path = require("path");


dotenv.config();

app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });

  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });

app.use(cors())
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);



mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => {

    app.listen(8000, () => console.log('Backend server is running'));
})
.catch(err => console.log(err))



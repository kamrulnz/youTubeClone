//21.13 second porjonto porechi
// git add korechi
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";

const app = express();
dotenv.config()

const connect = ()=> {

mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log("Connected to DB.")
})
.catch((err)=>{
  throw err
})
}


app.use('/api/users', userRoutes)
app.use('/api/videos', videoRoutes)
app.use('/api/comments', commentRoutes)

app.listen(8800, () => {

  connect()
    console.log(`Example app listening on port 8800`)
  })
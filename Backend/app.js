import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./src/view/userRoutes.js";
import { User } from "./src/modals/userModel.js";
const app = express();
const port = 8080;
const server = createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);

main()
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => console.log(err.message));

async function main() {

  await mongoose.connect('mongodb://127.0.0.1:27017/zoom_clone');

};

// const user1 = new User({
//   name: "pagga tripathi",
//   username: "pagga123",
//   password: "pagga@1224#12",
//   token: "paggsfged"
// })

// user1.save().then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

app.get("/home", (req, res) => {
  res.send("this is home route");
})


io.on('connection', (socket) => {
  console.log('a user connected');
});










app.listen(port, () => {
  console.log("listening on port 8080");
})
import { createServer } from "node:http";
import { Server } from "socket.io";

let connections = {}
let messages = {}
let timeOnline = {}
export const socketController = (io) => {

  io.on("connection", (socket) => {

    console.log("User connected: ", socket.id);

    socket.on("join-call", () => {

    })

    socket.on("signal", (toId, message) => {
      io.to(toId).emit("signal", socket.id, message);
    })

    socket.on("chat-message", (data, sender) => {

    })

    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    })


  })
}
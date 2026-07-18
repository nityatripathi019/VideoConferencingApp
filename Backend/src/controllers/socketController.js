import { createServer } from "node:http";
import { Server } from "socket.io";

let connections = {}
let messages = {}
let timeOnline = {}
export const socketController = (io) => {

  io.on("connection", (socket) => {

    console.log("User connected: ", socket.id);

    socket.on("join-call", (meetingId) => {

      if (connections[meetingId] === undefined) {
        connections[meetingId] = []
      }
      connections[meetingId].push(socket.id)
      //save join time
      timeOnline[socket.id] = new Date();


      //notify everyone
      connections[meetingId].forEach(element => {
        io.to(element).emit("user-joined", socket.id, connections[meetingId]);
      });

      if (messages[meetingId]) {
        for (const msg of messages[meetingId]) {
          io.to(socket.id).emit(
            "chat-messages",
            msg.data,
            msg.sender,
            msg.socketIdSender
          );
        }
      }
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
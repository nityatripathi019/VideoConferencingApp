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

      const [matchingRoom, found] = Object.entries(connections).reduce(([room, isFound], [roomKey, roomValue]) => {
        if (!isFound && roomValue.includes(socket.id)) {
          return [roomKey, true];
        }

        return [room, isFound];
      }, ['', false]);

      if (found === true) {
        if (messages[matchingRoom] === undefined) {
          messages[matchingRoom] = [];
        }

        messages[matchingRoom].push({ "sender": sender, "data": data, socketIdSender: socket.id })

        connections[matchingRoom].forEach((ele) => {
          io.to(ele).emit("chat-message", data, sender, socket.id);
        })
      }
    })

    socket.on("disconnect", () => {
      var diffTime = Math.abs(timeOnline[socket.id] - new Date());

      var key;

      for (const [k, v] of JSON.parse(JSON.stringify(Object.entries(connections)))) {

        for (let i = 0; i < v.length; ++i) {
          if (v[i] === socket.id) {
            key = k;

            for (let a = 0; a < connections[key].length; ++a) {
              io.to(connections[key][a].emit("user-left", socket.id))
            }

            var index = connections[key].indexOf(socket.id);

            connections[key].splice(index, 1);

            if (connections[key].length === 0) {
              delete connections[key];
            }

          }
        }
      }
    })


  })

  return io;
}
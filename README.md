## Video Conferencing Website

A full-stack Video Conferencing Web Application that enables users to create secure meeting rooms, join video calls, chat in real time, and collaborate seamlessly. Built using modern web technologies with real-time communication powered by WebRTC and Socket.IO.

🚀 Features
🎥 High-quality video and audio calling
👥 Create and join meeting rooms
🔒 Secure user authentication
💬 Real-time chat during meetings
🎤 Mute/Unmute microphone
📹 Turn camera On/Off
🖥️ Screen sharing
👤 User profile management
📱 Responsive design for desktop and mobile
⚡ Low-latency communication using WebRTC
🌐 Real-time signaling with Socket.IO
🛠️ Tech Stack
Frontend
React.js
CSS / Tailwind CSS (if used)
Axios
Socket.IO Client
Backend
Node.js
Express.js
Socket.IO
JWT Authentication
bcrypt.js
Database
MongoDB
Mongoose
Real-Time Communication
WebRTC
STUN/TURN Servers
Socket.IO


## 📁 Project Structure

```text
video-conferencing-app/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── socket/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── README.md
├── package.json
└── .gitignore
```

⚙️ Installation
Clone the repository
git clone https://github.com/yourusername/video-conferencing-app.git
Navigate into the project
cd video-conferencing-app
Install dependencies
Backend
cd server
npm install
Frontend
cd ../client
npm install
🔐 Environment Variables

Create a .env file inside the server folder.

PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:3000

STUN_SERVER=stun:stun.l.google.com:19302

TURN_SERVER=your_turn_server
TURN_USERNAME=your_username
TURN_PASSWORD=your_password
▶️ Run the Project
Start Backend
cd server
npm start
Start Frontend
cd client
npm start

The application will run on:

Frontend : http://localhost:3000

Backend  : http://localhost:5000
📸 Screenshots

Add your screenshots here.

Home Page

Meeting Room

Video Call

Chat

Authentication
🌟 Future Improvements
Recording meetings
Meeting scheduling
Virtual backgrounds
Live captions
Whiteboard collaboration
File sharing
Waiting room
Meeting analytics
AI meeting summaries
Breakout rooms
🤝 Contributing

Contributions are welcome!

Fork the repository
Create your feature branch
git checkout -b feature/NewFeature
Commit your changes
git commit -m "Add New Feature"
Push to the branch
git push origin feature/NewFeature
Open a Pull Request


👨‍💻 Author

Nitya Tripathi

GitHub: https://github.com/nityatripathi019
LinkedIn: https://www.linkedin.com/in/nityatripathi019/
⭐ Support

If you found this project helpful, don't forget to star ⭐ the repository and share it with others!

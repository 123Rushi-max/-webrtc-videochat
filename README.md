# 📹 Two-Way Video Conferencing App (Python + WebRTC)

This is a lightweight, browser-based video conferencing application built using **Python**, **WebRTC**, and **aiohttp**. It enables two users to connect via webcam for a real-time, peer-to-peer video call using modern browser technology.

## 🚀 Features

- ✅ Two-way real-time video communication
- ✅ Python signaling server with `aiohttp`
- ✅ Uses `aiortc` for WebRTC SDP/media handling
- ✅ Cross-device testing with local IP or ngrok

## 📁 Folder Structure

videochat/
├── server.py
└── static/
    ├── caller.html
    ├── receiver.html
    ├── client-caller.js
    ├── client-receiver.js

## 🛠️ Setup

```bash
pip install aiohttp aiortc
python server.py
```

## 🌐 Usage

- Laptop: http://localhost:8080/caller
- Phone: http://<your-local-ip>:8080/receiver

Use `ngrok http 8080` to expose to internet.

## 🙋‍♂️ Author

**Rushikesh Kurhade**

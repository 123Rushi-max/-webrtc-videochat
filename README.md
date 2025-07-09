# -webrtc-videochat
A real-time two-way video calling app built using Python, WebRTC, and aiohttp.
# 📹 Two-Way Video Conferencing App (Python + WebRTC)

This is a lightweight, browser-based video conferencing application built using Python, WebRTC, and aiohttp. It enables two users to connect via webcam for a real-time, peer-to-peer video call using modern browser technology.
I built a two-way video conferencing app using Python and WebRTC. The frontend uses HTML and JavaScript to capture webcam and send media. I used the WebRTC `RTCPeerConnection` API to stream video between two clients. On the backend, I built a signaling server using Python's `aiohttp` that handles SDP offer/answer exchange. I also implemented routing for static files and added support for testing across devices using ngrok or local IP. This gave me hands-on experience with real-time communication, async programming in Python, and frontend/backend integration.
---

## 🚀 Features

- ✅ Two-way real-time video communication
- ✅ Built-in Python signaling server using `aiohttp`
- ✅ Uses `aiortc` for WebRTC SDP exchange and media handling
- ✅ Web-based interface — no software installation required
- ✅ Works across devices on the same network or public internet (via ngrok)

---

## 🛠️ Tech Stack

| Layer      | Tools Used                         |
|------------|------------------------------------|
| Backend    | Python, aiohttp, aiortc             |
| Frontend   | HTML, CSS, JavaScript, WebRTC APIs |
| Signaling  | Custom built-in signaling server    |
| Testing    | Localhost / LAN / ngrok             |

---

## 📁 Folder Structure
videochat/
├── server.py
└── static/
├── caller.html
├── receiver.html
├── client-caller.js
├── client-receiver.js
├── index.html
└── client.js


Next Steps
Extract the zip

#install on cmd 
pip install aiohttp aiortc

#run project

python server.py


Open:

http://localhost:8080/caller on your laptop

http://<your-laptop-ip>:8080/ receiver on your phone

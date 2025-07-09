const pc = new RTCPeerConnection();

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    document.getElementById('local').srcObject = stream;
    stream.getTracks().forEach(track => pc.addTrack(track, stream));
  });

fetch('/offer')
  .then(response => response.json())
  .then(offer => pc.setRemoteDescription(new RTCSessionDescription(offer)))
  .then(() => pc.createAnswer())
  .then(answer => pc.setLocalDescription(answer))
  .then(() => {
    return fetch('/answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pc.localDescription)
    });
  });

pc.ontrack = event => {
  document.getElementById('remote').srcObject = event.streams[0];
};

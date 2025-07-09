const pc = new RTCPeerConnection();

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    document.getElementById('local').srcObject = stream;
    stream.getTracks().forEach(track => pc.addTrack(track, stream));
    return pc.createOffer();
  })
  .then(offer => pc.setLocalDescription(offer))
  .then(() => {
    return fetch('/offer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pc.localDescription)
    });
  })
  .then(() => fetch('/answer'))
  .then(response => response.json())
  .then(answer => pc.setRemoteDescription(answer));

pc.ontrack = event => {
  document.getElementById('remote').srcObject = event.streams[0];
};

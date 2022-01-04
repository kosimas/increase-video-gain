(() => {
    const videoElement = document.querySelector('video');
    if (!videoElement) return;
    
    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(videoElement);
    const gainNode = audioContext.createGain();
    
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.value = 20;
})()

// minified and uglified
(()=>{const e=document.querySelector("video");if(!e)return;const n=new AudioContext,t=n.createMediaElementSource(e),c=n.createGain();t.connect(c),c.connect(n.destination),c.gain.value=20})();

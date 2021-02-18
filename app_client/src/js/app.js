
window.onload = () => {
    const video  = document.querySelector("#camera");
    const canvas = document.querySelector("#picture");
  
    /** カメラ設定 */
    const constraints = {
      audio: false,
      video: {
        width: 224,
        height: 224,
        facingMode: "user"   // フロントカメラを利用する
      }
    };
  
    /**
     * カメラを<video>と同期
     */
    navigator.mediaDevices.getUserMedia(constraints)
    .then( (stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
      };
    })
    .catch( (err) => {
      console.log(err.name + ": " + err.message);
    });

    
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
   

  };
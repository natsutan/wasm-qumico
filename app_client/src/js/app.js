
window.onload = () => {
    const video  = document.querySelector("#camera");
    const canvas = document.querySelector("#picture").getContext("2d");
    const canvas_ret = document.querySelector("#result").getContext("2d");
    var img_dog = new Image();
    var img_cat = new Image();

    img_dog.src = "dog.png"
    img_cat.src = "cat.png"


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
    canvas.drawImage(video, 0, 0, canvas.width, canvas.height);

    console.log(typeof(canvas_ret));

    img_dog.onload = function() {
      canvas_ret.drawImage(img_dog, 0, 0);
      console.log("load img");
      console.log(typeof(img_dog));
      }

    console.log("end of on load");
  };
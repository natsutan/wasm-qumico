//import aimodule from './ai.wasm';

const video  = document.querySelector("#camera");
const canvas = document.querySelector("#picture").getContext("2d");
const canvas_ret = document.querySelector("#result").getContext("2d");
var img_dog = new Image();
var img_cat = new Image();




window.onload = () => {

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

    img_dog.onload = function() {
      canvas_ret.drawImage(img_dog, 0, 0);
      console.log("load img");
      console.log(typeof(img_dog));
      }

    
    var timer = function () {
      qumico_ret = _ai();
      console.log("qumico_ret " + qumico_ret);
      if (qumico_ret == 0) {
          canvas_ret.drawImage(img_dog, 0, 0);
          console.log("dog");
      } else {
          canvas_ret.drawImage(img_cat, 0, 0);
          console.log("cat");
      }

    }

    setInterval(timer, 3000);

    console.log("end of app.js");
  };


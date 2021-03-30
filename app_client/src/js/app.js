
const video  = document.querySelector("#camera");
const canvas = document.querySelector("#picture").getContext("2d");
const canvas_ret = document.querySelector("#result").getContext("2d");
var img_dog = new Image();
var img_cat = new Image();

/**
 * Returns a valid importObj.env object with default values to pass
 * into the WebAssembly.Instance constructor for Emscripten's
 * Wasm module.
 */
 const getDefaultEnv = () => ({
  memoryBase: 0,
  tableBase: 0,
  memory: new WebAssembly.Memory({ initial: 256 }),
  table: new WebAssembly.Table({ initial: 2, element: 'anyfunc' }),
  abort: console.log
});

/**
 * Returns a WebAssembly.Instance instance compiled from the specified
 * .wasm file.
 */
function loadWasm(fileName, importObj = { env: {} }) {
  // Override any default env values with the passed in importObj.env
  // values:
  const allEnv = Object.assign({}, getDefaultEnv(), importObj.env);

  // Ensure the importObj object includes the valid env value:
  const allImports = Object.assign({}, importObj, { env: allEnv });

  // Return the result of instantiating the module (instance and module):

  var importObject = { wasi_snapshot_preview1: { proc_exit: arg => console.log(arg) } };
//  return WebAssembly.instantiateStreaming(
//    fetch(fileName), importObject
//  ).then(obj => document.getElementById("output").value = obj.instance.exports.main());

  return fetch(fileName)
    .then(response => {
      if (response.ok) return response.arrayBuffer();
      throw new Error(`Unable to fetch WebAssembly file ${fileName}`);
    })
  //    .then(bytes => WebAssembly.instantiate(bytes, allImports));
    .then(bytes => WebAssembly.instantiate(bytes, importObject));
}


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

    console.log(typeof(canvas_ret));

    img_dog.onload = function() {
      canvas_ret.drawImage(img_dog, 0, 0);
      console.log("load img");
      console.log(typeof(img_dog));
      }

    
    const wasm = loadWasm('ai.wasm')


    var timer = function () {
      qumico_ret = wasm.then(h => h.ai()).catch(console.error);
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

    console.log("end of on load");
  };


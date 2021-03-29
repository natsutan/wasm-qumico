const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/js/app.js',
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        },          
        {
          test: /\.wasm$/,
          type: "webassembly/experimental"
        }

      ]
    }
};
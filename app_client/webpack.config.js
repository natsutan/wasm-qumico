const path = require('path');
 
module.exports = {
    mode: "development",
    entry: ['./src/js/app.js', './src/js/ai.js' ],
    output : {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js')
    },
    resolve: {
        alias: {
          querystring: "querystring-es3",
          process: "process/browser",
        },
      },
    
};




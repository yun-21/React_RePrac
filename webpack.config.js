const path = require('path');
let name = "app";
module.exports = {
  entry: `./src/${name}.js`,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `${name}.bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.ts/, //ts인지 확인할거야
        use: "ts-loader", //ts-loader 쓸거야
        exclude: /node_modules/ //제외할거야
      }
    ],
  },
  resolve: { //이행하다
    extensions: [".ts", ".js"]
  }
}
module.exports = {
  output: {
    filename: "emails-editor.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["raw-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".json", ".css"]
  }
};

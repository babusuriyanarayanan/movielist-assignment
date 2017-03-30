module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
       { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'

      }
    ]
  }
}


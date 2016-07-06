module.exports = {
  entry: './app.js',
  output: {
    path: __dirname,
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015&presets[]=react'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};

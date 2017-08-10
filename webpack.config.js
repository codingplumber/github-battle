// path is a bunch of utilites for working with the file directory
var path = require('path');
// HtmlWebpackPlugin creates an index.html file for us and places it in the dist folder
var HtmlWebpackPlugin = require('html-webpack-plugin');


// object that represents our configs for webpack
module.exports = {
  // ******STEP 1******entry point location of our application******
  entry: './app/index.js',
  // ******STEP 3******specifiy where webpack should output the new transformed code******
  output: {
    // path is directory where the new filename is gong to be placed
    // __dirname is the name of the directory that the executing script resides in
    path: path.resolve(__dirname, 'dist'),
    // filename is the file that webpack creates which contains our new code
    filename: 'index_bundle.js'
  },
  // ******STEP 2******loaders that tell webpack which transformations to make******
  // npm install the specific loader, then add a new object to the rules array
  module: {
    rules: [
      // each loader in the rules is composed of two things:
        // 1. which file to run transformation on
        // 2. the specific loader we want to run
      { test: /\.(js)$/, use: 'babel-loader' },
      // says to run the style-loader and css-loader on all files ending in css
      // use tells webpack which transformations to use on all paths that match the RegEx
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  // uses our index.html file to create a template in our dist
  // need to run npm install --save-dev html-webpack-plugin first
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};

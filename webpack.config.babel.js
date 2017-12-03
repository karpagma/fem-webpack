const { resolve } = require('path');

const configfunc = env => {
  const config = {
    context: resolve('src'),
    entry: './bootstrap.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
      pathinfo: env.prod === false
    },
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
      rules: [{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] }, { test: /\.css$/, use: ['style-loader, css-loader'] }]
    }
  };

  if (env.debug) {
    console.log(config); // eslint-disable-line
    debugger; // eslint-disable-line
  }
  return config;
};

module.exports = configfunc;

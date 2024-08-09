module.exports = {
  webpack: {
    configure: {
      // See https://github.com/webpack/webpack/issues/6725
      module: {
        rules: [
          {
            test: /\.wasm$/,
            type: 'javascript/auto',
          },
          {
            test: /\.s3db$/,
            use: 'binary-loader',
          }
        ]
      },
      resolve: {
        fallback: {
          fs: false,
          path: false,
          crypto: require.resolve('crypto-browserify'),
          buffer: require.resolve('buffer/'),
          stream: require.resolve('stream-browserify'),
          vm: require.resolve('vm-browserify'),
        }
      }
    },
  }
};
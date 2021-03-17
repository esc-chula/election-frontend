const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  webpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: 'public/manifest.json',
            transform(content) {
              return content
                .toString()
                .replace(/%((\w|\d)+)%/g, (_, key) => process.env[key])
            },
          },
        ],
      }),
    ],
  },
}

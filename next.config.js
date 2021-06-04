const withMDX = require('@next/mdx');

module.exports = withMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})({
  webpack: config => {
    config.module.rules.push({
      test: /\.djsx/,
      use: 'raw-loader',
    })
    return config
  }
})
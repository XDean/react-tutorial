const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx');

module.exports = withPlugins([
  [withMDX({
      extension: /\.(md|mdx)$/,
      options: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    }
  )],
  {
    webpack: config => {
      config.module.rules.push({
        test: /\.djsx/,
        use: 'raw-loader',
      })

      return config
    }
  }
])
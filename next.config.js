const withPlugins = require('next-compose-plugins');
const redirects = require('./redirects.json');
const withSvgr = require('next-svgr');

module.exports = withPlugins([withSvgr], {
  reactStrictMode: true,
  basePath: '/docs',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'raw-loader',
          options: {},
        },
      ],
    });

    return config;
  },
  async redirects() {
    return redirects;
  },
});

const redirects = require("./redirects.json");

module.exports = {
  reactStrictMode: true,
  basePath: "/docs",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "raw-loader",
          options: {},
        },
      ],
    });

    return config;
  },
  async redirects() {
    return redirects;
  },
};

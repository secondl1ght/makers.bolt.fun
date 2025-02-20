const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
      include: /node_modules/,
    });

    config.resolve.alias = {
      ...config.resolve.alias,

      "@/SB": path.resolve(__dirname),
      "@/Components": path.resolve(__dirname, "../src/Components"),
      "@/Api": path.resolve(__dirname, "../src/api"),
      "@/Utils": path.resolve(__dirname, "../src/utils"),
    };

    return config;
  },
};

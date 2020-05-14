module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        options: { mode: ["react-component", "html"] },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      }
    );
    return cfg;
  },
};

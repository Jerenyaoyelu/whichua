module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  runtimeCompiler: true,
  chainWebpack: (config) => {
    const rawRule = config.module.rule("raw");
    rawRule
      .test(/\.txt$/i)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
};

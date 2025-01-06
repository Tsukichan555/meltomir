module.exports = {
    reactStrictMode: true,
    // 他の設定が必要な場合はここに追加
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
  };
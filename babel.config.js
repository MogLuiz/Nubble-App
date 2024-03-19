module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@': './src/*',
          '@theme': './src/theme',
          '@assets': './src/assets',
          '@screens': './src/screens',
          '@components': './src/components',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@domain': './src/domain',
          '@infra': './src/infra',
          '@brand': './src/brand',
          '@api': './src/api',
        },
      },
    ],
  ],
};

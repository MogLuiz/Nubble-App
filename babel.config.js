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
        },
      },
    ],
  ],
};

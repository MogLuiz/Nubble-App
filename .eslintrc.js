module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 0,
  },
  plugins: ['import'],
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx'],
  //     rules: {
  //       'import/order': [
  //         'error',
  //         {
  //           groups: ['external', 'builtin', 'internal', 'parent', 'sibling'],
  //           pathGroups: [
  //             {
  //               pattern: 'react+(|-native)',
  //               group: 'external',
  //               position: 'before',
  //             },
  //             {
  //               pattern: '@+(routes|screens|components|hooks|theme)',
  //               group: 'internal',
  //               position: 'before',
  //             },
  //             {
  //               pattern: './',
  //               group: 'internal',
  //               position: 'before',
  //             },
  //           ],
  //           pathGroupsExcludedImportTypes: ['react+(|-native)'],
  //           alphabetize: {
  //             order: 'asc',
  //             caseInsensitive: true,
  //           },
  //           'newlines-between': 'always',
  //         },
  //       ],
  //     },
  //   },
  // ],
};

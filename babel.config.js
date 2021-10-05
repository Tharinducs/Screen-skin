module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _navigations: './src/navigations',
          _screens: './src/screens',
          _store: './src/store',
          _styles: './src/styles',
          _helpers: './src/helpers',
          _utils:'./src/utils'
        },
      },
    ],
  ],
};

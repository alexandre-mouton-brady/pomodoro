module.exports = {
  globDirectory: './dist/',
  globPatterns: ['**/*.{html,js,css,png}'],
  swDest: './dist/sw.js',
  swSrc: './public/sw.js',
  injectionPointRegexp: /(cached\s=\s)\[\s*\](\;)/,
};

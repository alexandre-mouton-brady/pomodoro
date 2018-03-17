const { resolve } = require('path');
const {
  FuseBox,
  QuantumPlugin,
  WebIndexPlugin,
  StylusPlugin,
  CSSPlugin,
} = require('fuse-box');
const { src, clean, task, exec, context } = require('fuse-box/sparky');

context(
  class {
    config() {
      return FuseBox.init({
        homeDir: 'src',
        output: 'dist/$name.js',
        useTypescriptCompiler: true,
        cache: !this.isProd,
        target: 'browser',
        log: true,
        debug: true,
        sourceMaps: !this.isProd,
        plugins: [
          WebIndexPlugin({ template: 'src/index.html' }),

          this.isProd && [StylusPlugin({ compress: true }), CSSPlugin()],
          !this.isProd && [StylusPlugin(), CSSPlugin()],

          this.isProd &&
            QuantumPlugin({
              uglify: true,
              treeshake: true,
              css: { clean: true },
              bakeApiIntoBundle: 'app',
              containedAPI: true,
            }),
        ],
      });
    }
  },
);

// Cleaning task
task('clean', async ctx => {
  await src('./dist')
    .clean('dist/')
    .exec();
});

task('copy', async ctx => {
  await src('**/**.!(js)', { base: 'public' })
    .dest('dist/')
    .exec();
});

// Dev task
task('dev', ['clean', 'copy'], async ctx => {
  ctx.isProd = false;
  const app = ctx.config();

  app.dev();

  app
    .bundle('app')
    .hmr()
    .watch()
    .instructions('> index.js');

  await app.run();
});

// Build task
task('build', ['clean', 'copy'], async ctx => {
  ctx.isProd = true;
  const app = ctx.config();

  app.bundle('app').instructions('> index.js');

  await app.run();
});

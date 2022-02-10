// eslint-disable-next-line no-undef
module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './themes/**/*.html',
                'layouts/**/*.html'
            ],
            safelist: {
              standard: [
                'show',
                'active',
                'collapsed',
                /^dropdown/,
                /^nav-level-/,
                /^is-/,
                /^has-/,
                /^js-/
              ],
              greedy: [
                /administrators__/,
                /articles__/,
                /authors__/,
                /categories__/,
                /page__/,
                /pages__/,
                /persons__/,
                /posts__/,
                /programs__/,
                /teachers__/,
                /volumes__/
              ]
            }
        },
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        }
    }
};

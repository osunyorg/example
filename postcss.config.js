/* eslint-disable no-undef */
const purgecssConfig = {
    content: [
        './hugo_stats.json',
        './themes/**/*.html',
        'layouts/**/*.html'
    ],
    extractors: [
        {
            extensions: ['json'],
            extractor: (content) => {
                const els = JSON.parse(content).htmlElements;
                return [
                    ...(els.tags || []),
                    ...(els.classes || []),
                    ...(els.ids || [])
                ];
            }
        }
    ],
    safelist: {
        standard: [
            'show',
            'active',
            'collapsed',
            /^dropdown/,
            /^nav-level-/,
            /^splide_/,
            /^is-/,
            /^has-/,
            /^js-/,

            // Glightbox
            'wait-autoplay',
            'gfadeIn',
            'gfadeOut',
            'gslideOutLeft',
            'gslideInLeft',
            'gslideOutRight',
            'gslideInRight',
            'gzoomIn',
            'gzoomOut'
        ],
        deep: [
            // Glightbox
            /ratio/,
            /^glightbox/,
            /^gslide/,
            /^desc-top/,
            /^desc-left/,
            /^ginlined/,
            /^zoomed/,
            /^gdesc-/,
            /^gabsolute/,
            /^grelative/,
            /^gloader/,
            /^goverlay/,
            /^gprev/,
            /^gnext/,
            /^gclose/,
            /^gbtn/,
            /^gcontainer/
        ]
    }
};

module.exports = {
    plugins: {
        autoprefixer: {},
        cssnano: {
            preset: 'default'
        },
        '@fullhuman/postcss-purgecss': purgecssConfig
    }
};

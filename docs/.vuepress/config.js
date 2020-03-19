// const config = require('../../config.json')
module.exports = {
    // title: config.title,
    // description: config.description,
    base: "/",
    // themeConfig: {
    //     logo: config.logo,
    //     footer: config.footer,
    //     nav: config.navigation,
    // },
    extraWatchFiles: [
        '.vuepress/foo.js', // Relative path usage
        // '/path/to/bar.js'   // Absolute path usage
        '.vuepress/theme/*/**',
        '.vuepress/layouts/*/**',
        '.vuepress/styles/**',
        '.vuepress/components/**',
        '.vuepress/components/socialGrid.vue'
    ],
    markdown: {
        anchor: {
            permalink: false
        },
        lineNumbers: false,
        toc: {
            includeLevel: [1, 2]
        },
    },
    // plugins: [
    //     '@vuepress/blog',
    //     {
    //         directories: [{
    //             // Unique ID of current classification
    //             id: 'post',
    //             // Target directory
    //             dirname: '_posts',
    //             // Path of the `entry page` (or `list page`)
    //             path: '/',
    //         }, ],
    //     },
    // ],
}
module.exports = {
    title: 'AcWing-Helper',
    description: 'AcWing 刷题助手',
    base: '/',
    dest: './dist/acwing-docs',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: require('./nav/zh'),
        sidebar: require('./sidebar/zh'),
        displayAllHeaders: true,
        sidebarDepth: 5,
        lastUpdated: 'Last Updated',

        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        prevLinks: true,

        smoothScroll: true
    },
    /* 显示代码的行号 */
    markdown: {
        lineNumbers: true
    },
}
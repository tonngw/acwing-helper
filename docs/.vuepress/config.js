module.exports = {
    title: 'AcWing-Helper',
    description: 'AcWing 刷题助手',
    head: [
        [
          'script',
          {},
          `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?97467f5290c16fc06728bce3a68e5a83";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `
        ]
      ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: require('./nav/zh'),
        sidebar: require('./sidebar/zh'),
        displayAllHeaders: true,
        sidebarDepth: 5,
        lastUpdated: '上次更新',

        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        prevLinks: true,

        smoothScroll: true
    },
    /* 显示代码的行号 */
    markdown: {
        lineNumbers: true
    },
    evergreen: true,
}
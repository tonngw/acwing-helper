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
        lastUpdated: 'Last Updated',

        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        prevLinks: true,

         // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'tonngw/acwing-helper',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        repo: 'tonngw/acwing-helper',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',

        smoothScroll: true
    },
    /* 显示代码的行号 */
    markdown: {
        lineNumbers: true
    },
}
## AcWing-Helper

在线阅读地址：[achelper.tonngw.com](https://achelper.tonngw.com)

使用指南请移步：[这里](https://www.acwing.com/blog/content/20319/)

插件安装地址：[这里](https://greasyfork.org/zh-CN/scripts/444381-acwing-helper)

兄弟插件 `LeetCode-Helper` 安装地址：[这里](https://greasyfork.org/zh-CN/scripts/444408-leetcode-helper)

## 更新日志

> 该工具自 2022.05.03 发布第一个版本以来，目前安装量已经达到 1000+，期间不少小伙伴提出了很多宝贵的开发建议，感谢大家的鼓励与支持，我创建了一个交流群，方便大家相互交流，后面新版本更新首先会在群里进行内测，QQ 群号：`702163578` | [扫码添加](https://cdn.acwing.com/media/article/image/2023/03/11/52520_ef823a08bf-group-qrcode.jpg)。

**`AcWing-Helper` 使用指南**：[点这里](https://www.acwing.com/blog/content/20319/)

仓库地址：[https://github.com/tonngw/acwing-helper](https://github.com/tonngw/acwing-helper)

插件地址：[https://greasyfork.org/zh-CN/scripts/444381-acwing-helper](https://greasyfork.org/zh-CN/scripts/444381-acwing-helper)

**[更好的阅读体验](https://achelper.tonngw.com/)**

---

### 2024.03.03

> emmm，好久没更新了，工作之后刷题比较少了，但还是会上来看看，看到 AcWing 功能也越来越完善了，还是挺开心的hh。

**预告一下下次准备更新的功能，在绿泡泡旁边放一个终端的图标，点击可以直接打开 AC Terminal，尤其在学 Linux 和 Django 课的时候会很方便。**

功能优化：

- 优化复制题目的功能

- 优化从 LeetCode 跳转 AcWing LeetCode 究极班题目页面
    ![LeetCode跳转AcWing.jpg](https://cdn.acwing.com/media/article/image/2024/03/03/52520_bb69bdc6d9-LeetCode跳转AcWing.jpg) 

### 2023.05.31

添加功能：

- 添加功能开关（目前支持「是否记住页面风格（AcWing | LeetCode）」、「是否在题目页面隐藏桌面文件夹」）

- 首页添加题目搜索和随机一题

- 生成页面内容导航 TOC（支持题解、分享页面等）**这个功能还是很方便的！**

优化：LeetCode 跳转 AcWing 功能以及LeetCode 页面风格编程体验


感谢 [LeetCodeRating](https://greasyfork.org/zh-CN/scripts/450890-leetcoderating-%E6%98%BE%E7%A4%BA%E5%8A%9B%E6%89%A3%E5%91%A8%E8%B5%9B%E9%9A%BE%E5%BA%A6%E5%88%86) 作者提供的关于功能开关的开发思路，大家可以去使用一下。

**效果图：**

- 功能 10 - `添加功能开关`

    ![添加功能开关.jpg](https://cdn.acwing.com/media/article/image/2023/05/31/52520_2803d2b5ff-添加功能开关.jpg) 

- 功能 11 - `首页添加题目搜索和随机一题`

    ![首页添加题目搜索和随机一题.jpg](https://cdn.acwing.com/media/article/image/2023/05/31/52520_2df8e25cff-首页添加题目搜索和随机一题.jpg) 

- 功能 12 - `生成页面内容导航 TOC（支持题解、分享页面等）`

    ![添加内容导航.jpg](https://cdn.acwing.com/media/article/image/2023/05/31/52520_34273769ff-添加内容导航.jpg) 

### 2023.03.11

添加功能：

- 在题目页面添加「一键填入样例」按钮方便调试，点击后样例便会自动填入到输入框中，同时页面滑动到调试位置，此时可以手动点击调试按钮或者配合我们的快捷键进行快速调试。

其他说明（优化）：

- 页面滑动仅在 AcWing 页面风格下生效，LeetCode 页面风格不需要
- 一键填入样例排除掉了核心代码模式的题目（不需要手动填写样例）


  ![sample-auto-fill.png](https://cdn.acwing.com/media/article/image/2023/03/11/52520_b9f55ebebf-sample-auto-fill.png) 

---

### 2022.07.26

添加功能：

- 绑定快捷键快速调试代码，和 `AC Saber` 一样，`F9` 调试代码，`F10` 提交代码。

### 2022.06.29

添加功能：

- 添加其他页面代码复制功能：现已支持打卡、题解、分享、问答页面

### 2022.06.18

更新：

- 修复题目复制功能 - 表格 table 标签解析错误，[https://www.acwing.com/problem/content/description/4283/](https://greasyfork.org/zh-CN/scripts/444381-acwing-helper)

### 2022.06.04

更新：

- 修复代码打卡页面「复制代码」功能 Bug，支持同页面多份代码复制

### 2022.05.28

添加功能：

- 活动打卡页面直接跳转到题目页面（支持所有活动）

- 在题目内容页面内打开题目

### 2022.05.03

`AcWing-Helper` 的第一个版本

功能：

- 复制题目描述，并存入剪切板

- 复制题目描述生成当前题目的题解模板，并存入剪切板
    大多数情况下一道题目只会写一种做法，这里提供了一套简洁的模板，模板来自 `AcWing`。

- 切换页面风格，`AcWing <-> LeetCode`

- 复制代码（目前只支持 `*/code/*` 目录下的代码，即从打卡页面点击题目查看相关代码）
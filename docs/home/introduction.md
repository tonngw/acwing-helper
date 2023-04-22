# 🚀 AcWing-Helper

## 简介

写这个脚本的初衷是为了方便在 [AcWing](https://www.acwing.com/) 上写题解，每次复制题目描述再修改格式就是一件比较头疼的事情，其实很早之前在写题解的时候就萌生了这个想法，但一直没有动手去做，总觉得太难不好实现。这次花了几天时间边学边查总算写出来了。另外还添加了一些比较实用的功能，我相信 `AcWing` 的小伙伴们应该会喜欢的。

![AcWing-Helper](https://cdn.acwing.com/media/article/image/2023/04/19/52520_8b46bcf8de-题目页面.jpg) 

## 功能列表

1. 复制题目描述，并存入剪切板

2. 复制题目描述生成当前题目的题解模板，并存入剪切板
   大多数情况下一道题目只会写一种做法，这里提供了一套简洁的模板，模板来自 `AcWing`。

3. 切换页面风格，`AcWing <-> LeetCode`，点击「挑战模式」旁边的 「Right」按钮即可切换为左右模式，「Bottom」按钮切换为上下模式。

4. 复制代码（目前只支持 `*/code/*` 目录下的代码，即从打卡页面点击题目查看相关代码）
 
5. 活动打卡页面直接跳转到题目页面（支持所有活动）

6. 在题目内容页面内打开题目

7. 快捷键快速调试代码

8. 在题目页面添加「一键填入样例」按钮方便调试，点击后样例便会自动填入到输入框中，同时页面滑动到调试位置，此时可以手动点击调试按钮或者配合我们的快捷键进行快速调试。

9. LeetCode 题目一键跳转 AcWing LeetCode 究极班题目资源页面（支持**中文版**和**国际版**） 「前提：**报名过 LeetCode 究极班的同学才能正常使用！**」

## AcWing-Helper 工作流

1. 打开一道题目先读题
2. 有了思路，我们往往会边写边回头看题目描述，此时可以 `Alt + S` 切换页面风格，左边看题右边编写代码（会比上下翻页方便一些）。
3. 代码编写完成后 `F9` 调试代码，如果题目有多个样例可以点击每个样例前的「填入样例」按钮自动填入进行调试，调试通过后 `F10` 提交代码。
4. 代码 `AC` 之后，`Alt + C` 生成题解模板，在题解页面记录题目思路，如果有自己的题解模板， 可以 `Alt + T` 仅复制题目描述。`
5. 想调试打卡页面中别人的代码，点击左上角 `Copy` 按钮图标一键复制代码。

## 安装指南

**环境：** 首先安装 `Tampermonkey` 油猴插件，官网地址 [https://www.tampermonkey.net/](https://www.tampermonkey.net/) 

- Chrome：[https://www.chajianxw.com/product-tool/11478.html](https://www.chajianxw.com/product-tool/11478.html)，先下载再看里面的教程。（如果按照教程安装不成功的话有小伙伴反馈可以直接在油猴官网下载安装 by [ssy_](https://www.acwing.com/user/myspace/index/238101/)）
- Edge：[https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd?hl=zh-CN)，Edge 还是比较简单的，直接点击链接安装即可。

**Option 1**：直接在 [https://greasyfork.org/zh-CN](https://greasyfork.org/zh-CN) 搜索 `acwing-helper`，安装，或者直接点击 [此链接](https://greasyfork.org/zh-CN/scripts/444381-acwing-helper) 直接安装。「推荐」

**Option 2**：脚本源代码已经放在了 [我的 GitHub](https://github.com/tonngw/acwing-helper) 上 | 在 `acwing-helper` 脚本安装页面「代码」Tab 中也可以看到，可以复制自行安装，如果对大家有帮助别忘了点个 `Star` 吖~。

## 如何使用

### 快捷键列表

为四个常用功能绑定了快捷键

- 复制题目描述 - `Alt + T(timu)`
- 生成题解模板 - `Alt + C(copy)`
- 切换页面风格 - `Alt + S(split)`
- 快速调试代码 - `F9` 调试，`F10` 提交

大家可以自行在源代码中修改快捷键

### 页面按钮

更多功能描述请看 [功能手册](/home/feature.html)

### 右键菜单

右键 - `Tampermonkey`，可以看到 `acwing-helper` 提供的功能。

![image-20220503103634672.png](https://cdn.acwing.com/media/article/image/2022/05/03/52520_89175c3bca-image-20220503103634672.png) 

### 插件栏

点击油猴插件，可以看到 `acwing-helper` 提供的功能。

![image-20220503104645827.png](https://cdn.acwing.com/media/article/image/2022/05/03/52520_9048be6fca-image-20220503104645827.png) 

## 交流群

我创建了一个交流群，方便大家相互交流，后面新版本更新首先会在群里进行内测，QQ 群号：`702163578`。

<img src="https://cdn.acwing.com/media/article/image/2023/04/19/52520_200cfd88de-group-qrcode-small.jpg" alt="二维码" width="50%" />

## 支持作者

如果我的努力给你带来了便利，请不要吝啬你的赞赏，帮我在 [GitHub](https://github.com/tonngw/acwing-helper) 仓库中点个 `Star` 吧~

## 其他说明

### 致谢

感谢以下作者提供的思路，感谢 `AcWing` 提供的算法学习平台！

- [https://github.com/ZimoLoveShuang/leetcode-helper](https://github.com/ZimoLoveShuang/leetcode-helper) 
- [https://greasyfork.org/zh-CN/scripts/441750-acwing-content-to-markdown](https://greasyfork.org/zh-CN/scripts/441750-acwing-content-to-markdown)
- [https://greasyfork.org/zh-CN/scripts/447992-leetcode2acwing](https://greasyfork.org/zh-CN/scripts/447992-leetcode2acwing)

### 贡献者名单

- [@acwing_gza](https://www.acwing.com/user/myspace/index/61523/)
- [@ssy_](https://www.acwing.com/user/myspace/index/238101/)

### 版权声明

关于 `AcWing` 上的内容商业转载请联系作者获得授权，非商业转载请注明出处。

### 参考资料

- https://github.com/mixmark-io/turndown
- https://bbs.tampermonkey.net.cn/
- https://github.com/t4t5/sweetalert
- https://blog.csdn.net/qq_40205116/article/details/84664192
- https://blog.csdn.net/u010598445/article/details/108880602

### 免责声明
> 感谢 @[acwing_gza](https://www.acwing.com/user/myspace/index/61523/) 同学编写的免责声明~

1. 用户不得盗用本油猴插件，如需转载，请注明出处。
2. 本插件版权归 [tonngw](https://www.acwing.com/user/myspace/index/52520/)，如有需要，可以反馈给作者。
3. 不可以使用本插件，进行违法活动，包括但不限于色情暴力图片，文字以及一切传播方式。
4. 不可用此插件偷盗 AcWing 学习资源。
5. 插件失效请联系 [tonngw](https://www.acwing.com/user/myspace/index/52520/)，并立刻停用。
6. 最终解释权归 [tonngw](https://www.acwing.com/user/myspace/index/52520/) 所有。
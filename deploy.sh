#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist/

# 如果是发布到自定义域名
echo 'achelper.tonngw.com/' > CNAME

git init
git add -A
git commit -m 'feat: deploy page'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tonngw/acwing-helper.git master:gh-pages

cd -
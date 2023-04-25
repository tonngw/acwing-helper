#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd docs/.vuepress/dist/

# ����Ƿ������Զ�������
echo 'achelper.tonngw.com/' > CNAME

git init
git add -A
git commit -m 'feat: deploy page'

# ��������� https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tonngw/acwing-helper.git master:gh-pages

cd -
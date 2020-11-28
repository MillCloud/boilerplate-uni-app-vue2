# boilerplate-uni-app

[English](./README.md) | 简体中文

---

用于测试 uni-app 的仓库。

## 起步

这些说明将让你得到能在本地启动、运行的项目副本以进行开发和测试。有关如何在实时系统上部署项目，请参阅[部署](#部署)。

## 准备

- 推荐使用 nvm，长期支持版 node，长期支持版 npm 和 yarn。
  - 首先安装 nvm
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm#readme)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows#readme) - [已知问题 #300](https://github.com/coreybutler/nvm-windows/issues/300)
  - 在终端/命令行安装长期支持版 node
  - 全局升级 npm 到长期支持版，安装 yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - 默认设置了镜像为国内淘宝源
- Git 也是需要的
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - 推荐使用 [Homebrew](https://brew.sh/) 在 Mac 安装 git

### 安装

```sh
# clone
git clone git@github.com:MillCloud/boilerplate-uni-app.git

# enter the directory
cd boilerplate-uni-app

# install dependency
yarn

# build for development
# use hbuilderx to build for app development
yarn dev:mp-360
yarn dev:mp-alipay
yarn dev:mp-baidu
yarn dev:mp-qq
yarn dev:mp-toutiao
yarn dev:mp-weixin
yarn dev:quickapp-native
yarn dev:quickapp-webview
yarn dev:quickapp-webview-huawei
yarn dev:quickapp-webview-union

# build for production
# use hbuilderx to build for app production
yarn build:mp-360
yarn build:mp-alipay
yarn build:mp-baidu
yarn build:mp-qq
yarn build:mp-toutiao
yarn build:mp-weixin
yarn build:quickapp-native
yarn build:quickapp-webview
yarn build:quickapp-webview-huawei
yarn build:quickapp-webview-union

# lint scripts, styles and ls
yarn lint

# check deps
yarn run check

# git commit and git push
# git add should be handled by yourself
yarn commit
```

## 测试

目前没有测试。欢迎 PR。

## 部署

- 确认所有和[模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)相关的地方已经配置完成。
- 运行`yarn build:platform`，用开发者工具上传对应文件夹的内容。
- 用 hbuilderx 生成 app，手动部署。

## 主要依赖

- [vue](https://vuejs.org)
- [uni-app](https://uniapp.dcloud.io/)
- [vue-cli](https://cli.vuejs.org/)
- [vuex](https://vuex.vuejs.org/)
- [vue-composition-api](https://composition-api.vuejs.org/)
- [vue-i18n](https://kazupon.github.io/vue-i18n/)
- [uview-ui](https://www.uviewui.com/)
- [uni-ui](https://uniapp.dcloud.io/component/README?id=uniui)
- [@modyqyw/mp-scss](https://millcloud.github.io/mp-scss/)
- [lodash](https://lodash.com/)
- [xe-utils](https://github.com/x-extends/xe-utils#readme)
- [dayjs](https://day.js.org)
- [mock.js](http://mockjs.com/)
- [sass](https://sass-lang.com/) - 使用了 [dart-sass](https://sass-lang.com/dart-sass)，可能会导致图标问题，见 [vue-element-admin issue#3344](https://github.com/PanJiaChen/vue-element-admin/issues/3344)
- [commitlint](https://commitlint.js.org/)
- [commitizen](http://commitizen.github.io/cz-cli/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [ls-lint](https://ls-lint.org/)
- [husky](https://github.com/typicode/husky#readme)
- [lint-staged](https://github.com/okonet/lint-staged#readme)
- [@modyqyw/fabric](https://github.com/MillCloud/fabric#readme)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates#readme)

## 贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解行为准则以及提交拉取请求的流程的详细信息。

## 作者

- **Rui Wu** - *最初工作* - [ModyQyW](https://github.com/ModyQyW)

另请参阅参与此项目的 [contributors](https://github.com/ModyQyW/boilerplate-uni-app/contributors) 列表。

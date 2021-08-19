# boilerplate-uni-app

## 简介

`boilerplate-uni-app` 是一个面向中国用户的的简单 `uni-app` (`vue2`) 模板，目标是帮助你快速搭建小程序/移动端应用。当然，也希望能引导你更进一步地了解 `uni-app`/`vue2` 生态。

**注意：`uni-app` 并不是一个尽善尽美的方案，在很多细节上还有待提高。如果你只是想要开发移动端应用，你可以考虑使用 [boilerplate-vue](https://github.com/MillCloud/boilerplate-vue) 搭配 `cordova`，`native-script` 或 `capacitor`。**

### 主要依赖

- [vue2](https://cn.vuejs.org)
- [vue-composition-api](https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md)
- [uni-app](https://uniapp.dcloud.io/)
- [uni-composition-api](https://github.com/TuiMao233/uni-composition-api)
- [vue-cli](https://cli.vuejs.org/zh/)
- [vuex](https://vuex.vuejs.org/zh/)
- [vue-use](https://vueuse.org/)
- [vue-i18n](https://kazupon.github.io/vue-i18n/)
- [uni-ajax](https://uniajax.ponjs.com/)
- [axios-cache-adapter](https://github.com/RasCarlito/axios-cache-adapter)
- [axios-logger](https://github.com/hg-pyun/axios-logger)
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter)
- [axios-retry](https://github.com/softonic/axios-retry)
- [statuses](https://github.com/jshttp/statuses)
- [@modyqyw/mp-scss](https://modyqyw.github.io/mp-scss/)
- [@modyqyw/utils](https://github.com/modyqyw/utils)
- [thor-ui](https://www.thorui.cn/doc/)
- [uview-ui](https://www.uviewui.com/)
- [uni-ui](https://uniapp.dcloud.io/component/README?id=uniui)
- [iconify](https://iconify.design/)
- [dayjs](https://day.js.org)
- [mock.js](http://mockjs.com/)
- [sass](https://sass-lang.com/) - 使用了 [dart-sass](https://sass-lang.com/dart-sass)，可能会导致图标问题，见 [vue-element-admin issue#3344](https://github.com/PanJiaChen/vue-element-admin/issues/3344)
- [purgecss](https://purgecss.com)
- [@modyqyw/fabric](https://github.com/MillCloud/fabric)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates)

请先阅读上面的文档，并确保你对 node 和 npm 有基本的理解。

## 起步

这部分说明将让你得到能在本地运行的项目副本以开始开发。有关如何部署项目，请阅读 [部署部分](#部署)。

## 准备

你可能需要使用梯子或手机 WiFi 完成准备步骤。

对于 macOS 用户，请按照以下指引操作。

```sh
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# 设置 nvm 镜像
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
# 安装 node@14
nvm install 14
# 设置 node@14 为默认版本
nvm alias default 14
# 安装 pnpm
npm i -g pnpm --registry=https://registry.npm.taobao.org
# 安装 homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 安装 git
brew install git
# 不自动转换换行符
git config --global core.autocrlf false
# 设置默认分支名为 main
git config --global init.defaultBranch main

```

设置 `~/.huskyrc`。

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

```

对于 Windows 用户，请按照以下指引操作。

首先安装 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) 和 [Git](https://git-scm.com/downloads)。

如果你正在使用 [Chocolatey](https://chocolatey.org/) 或 [Scoop](https://scoop.sh/)，你也可以通过命令安装，然后配置。

```sh
# 使用 Chocolatey
choco install nvm
choco install git

# 使用 Scoop
scoop install nvm
scoop install git

# 不自动转换换行符
git config --global core.autocrlf false
# 设置默认分支名为 main
git config --global init.defaultBranch main
# 设置 nvm 镜像
nvm node_mirror https://npm.taobao.org/mirrors/node/
# 安装 node@14
nvm install 14.17.5
# 使用 node@14
nvm use 14.17.5
# 安装 pnpm
npm i -g pnpm --registry=https://registry.npm.taobao.org

```

其它系统请根据以上指引自行调整。

另外，你还需要安装最新的 [HBuilderX 正式版](https://www.dcloud.io/hbuilderx.html)，用于申请一个 appid（DCloud 应用标识，也可以在 [网页](https://dev.dcloud.net.cn/) 上申请），以及把项目运行到真机或模拟器上。

### 安装

```sh
# clone 项目到本地
git clone git@github.com:MillCloud/boilerplate-uni-app.git
# git clone git@gitee.com:MillCloud/boilerplate-uni-app.git
# 进入项目
cd boilerplate-uni-app
# 安装依赖
pnpm install

```

如果一切正常，此时模板已经可以启动了，请参考 [命令部分](#命令) 正式开始开发。但如果想通过文档了解更多，请先阅读 [主要依赖](#主要依赖) 内链接对应的文档，再继续阅读下去。

## 使用

这部分说明力求使你能自顶向下地理解这个模板已经替你完成的工作，以及你需要自行完成的工作。

### 特性

- 国际化配置示例，支持 `en` 和 `zh-Hans`
- 路由配置示例
- 状态管理配置示例
- 请求配置示例
- 应用信息配置示例

### 命令

模板里内置了较多命令，以适应各种不同的情况。更多的命令你可以查看 [package.json](./package.json)。

启动前请移除 [manifest.json](./src/manifest.json) 内的注释，并使用 `HBuilderX` 申请一个 appid（DCloud 应用标识）。

|命令|含义|
|-|-|
|`pnpm run dev:mp-360`|`development` 模式启动 360 小程序|
|`pnpm rundev:mp-alipay`|`development` 模式启动支付宝小程序|
|`pnpm rundev:mp-baidu`|`development` 模式启动百度小程序|
|`pnpm rundev:mp-kuaishou`|`development` 模式启动快手小程序|
|`pnpm rundev:mp-qq`|`development` 模式启动 QQ 小程序|
|`pnpm rundev:mp-toutiao`|`development` 模式启动字节跳动小程序|
|`pnpm rundev:mp-weixin`|`development` 模式启动微信小程序|
|`pnpm rundev:quickapp-webview`|`development` 模式启动快应用|
|`pnpm runbuild:mp-360`|`production` 模式打包 360 小程序|
|`pnpm runbuild:mp-alipay`|`production` 模式打包支付宝小程序|
|`pnpm runbuild:mp-baidu`|`production` 模式打包百度小程序|
|`pnpm runbuild:mp-kuaishou`|`production` 模式打包快手小程序|
|`pnpm runbuild:mp-qq`|`production` 模式打包 QQ 小程序|
|`pnpm runbuild:mp-toutiao`|`production` 模式打包字节跳动小程序|
|`pnpm runbuild:mp-weixin`|`production` 模式打包微信小程序|
|`pnpm runbuild:quickapp-webview`|`production` 模式打包快应用|
|`pnpm runrun clean`|清理 `dist` 目录|
|`pnpm runrun check`|检查项目依赖版本|
|`pnpm runcommit`|引导填写 git 提交信息并提交，你需要手动 `git add` 对应部分后执行该命令|
|`pnpm runi18n:report`|获取国际化信息|
|`pnpm runlint`|检查 json 文件，脚本文件，样式文件和目录|
|`pnpm runlint:json`|格式化 json 文件|
|`pnpm runlint:markdown`|格式化 markdown 文件|
|`pnpm runlint:script`|检查并自动修复脚本文件|
|`pnpm runlint:style`|检查并自动修复样式文件|
|`pnpm runlint:ls`|检查目录|
|`pnpm runinfo`|列出环境信息|

注意；如果要开发移动应用，必须用 `HBuilderX` 运行到模拟器或真机。

### 项目结构

```sh
.
├── .husky                      # husky 配置目录
├── public
├── src
│   ├── apis                    # 接口目录
│   ├── components              # 全局组件目录
│   ├── composables             # 组合式 API 目录
│   ├── i18n                    # 国际化目录
│   ├── mocks                   # 接口模拟数据目录
│   ├── pages                   # 页面视图目录
│   ├── plugins                 # 插件目录
│   ├── static                  # 资产目录
│   ├── store                   # 状态管理目录
│   ├── styles                  # 全局样式目录
│   ├── utils                   # 工具方法目录
│   ├── App.vue
│   ├── main.js
│   ├── manifest.json           # 信息配置文件
│   └── pages.json              # 页面配置文件
├── tests                       # 测试内容文件夹
├── unpackage                   # 打包时使用的资产文件夹
├── .browserslistrc             # 浏览器支持列表文件
├── .commitlintrc.js            # commitlint 配置文件
├── .editorconfig
├── .env                        # 所有环境都载入的环境变量
├── .env.development            # development 载入的环境变量
├── .env.production             # production 载入的环境变量
├── .eslintrc.js                # eslint 配置文件
├── .gitattributes              # git 配置文件
├── .gitignore                  # git 配置文件
├── .markdownlint.json          # markdownlint 配置文件
├── .npmrc                      # npm 配置文件
├── .prettierrc.js              # prettier 配置文件
├── .release-it.js              # release-it 配置文件
├── .stylelintrc.js             # stylelint 配置文件
├── babel.config.js             # babel 配置文件
├── jest.config.js              # jest 配置文件
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js           # postcss 配置文件
├── README.md
├── tsconfig.json               # typescript 配置文件
├── update-manifest.js          # 配置 release-it 自动更新 manifest.json 的文件
└── vue.config.js               # vue-cli 配置文件
```

### 国际化配置

模板内置了两种语言配置，分别是简体中文和英语。

简体中文文件是 [@/i18n/locales/zh-Hans.json](./src/i18n/locales/zh-Hans.json)，英语文件是 [@/i18n/locales/en.json](./src/i18n/locales/en.json)。

你可以在上面两个文件里加入你需要的字段以支持翻译，务必注意字段需要保持一致，也请注意合理地划分字段。

而要引入和 `vue2` 强绑定的 `npm` 库的语言包，你可以在 [@/i18n/index.js](./src/i18n/index.js) 内操作。

引入和 `vue2` 不强绑定的 `npm` 库的语言包，请查看它们的文档说明。

### 路由配置

uni-app 使用 [pages.json](./src/pages.json) 配置路由，请查看 [文档](https://uniapp.dcloud.io/collocation/pages)。

### 状态管理配置

模板把状态管理分成了两类，一类是应用类状态，一类是业务类状态。

#### 应用类状态

应用类状态是应用本身的状态，包括应用当前语言等。

#### 业务类状态

业务类状态是应用所承载的业务的状态，包括用户信息，页面通用数据等。模板建议把业务类状态分模块放置。

### 请求配置

#### uni-ajax 封装

模板把 `uni-ajax` 封装成 `$request` 并绑定到 `vue` 实例上，另外还添加了拦截器和适配器以实现自动日志、缓存、重试。你可以调整 [封装文件](./src/plugins/request.js) 默认的配置以匹配业务。

#### proxy

在 `development` 运行模式下请求服务器往往会出现跨域问题，因此模板内已经设置了只在 `development` 运行模式下生效的 `devServer.proxy`，见 [vue.config.js](./vue.config.js) L26。

同时，需要设置 `uni-ajax` 的 `baseURL` 为空字符串，否则会导致代理失败，见 [@/plugins/request.js](./src/plugins/request.js) L72。

为了向其它 CLI 靠近，你可以调整 `devServer.proxy`，下面是一个示例。

```js
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_REQUEST_BASE_URL || 'https://fake.url',
        changeOrigin: true,
      },
    },
  },
};

```

一般情况下，`devServer.proxy` 应该与某个 `production` 运行模式下的 `VUE_APP_REQUEST_BASE_URL` 一致。

### 应用信息配置

uni-app 使用 [manifest.json](./src/manifest.json) 配置应用信息，请查看 [文档](https://uniapp.dcloud.io/collocation/manifest)。

### 页面信息配置

uni-app 使用 [pages.json](./src/pages.json) 配置页面信息，请查看 [文档](https://uniapp.dcloud.io/collocation/pages)。

默认启用了 [easycom](https://uniapp.dcloud.io/component/README?id=easycom%e7%bb%84%e4%bb%b6%e8%a7%84%e8%8c%83)，支持 `uni-ui`，`uview-ui` 和 `thor-ui`。

### VSCode 支持

你可以参考 [插件](https://www.yuque.com/modyqyw/environment/skhbfr) 和 [settings.json](https://www.yuque.com/modyqyw/environment/aozv2q)。

## 部署

- 确认所有和 [模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html) 相关的地方已经配置完成。
- 对于小程序，运行对应的命令，然后用开发者工具上传 `dist` 目录下对应平台的内容。
- 对于移动端应用，用 `HBuilderX` 云打包或本地安心打包获取安装包。
- 默认会生成报告并自动更新 `manifest.json`。

## 浏览器支持

请查看 [.browserslistrc](./.browserslistrc)。

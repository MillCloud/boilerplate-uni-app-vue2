# boilerplate-uni-app

## 简介

boilerplate-uni-app 是一个面向中国用户的的简单 uni-app (vue2) 模板，目标是帮助你快速搭建小程序/移动应用。当然，也希望能引导你更进一步地了解 uni-app/vue2 生态。

### 主要依赖

- [vue2](https://cn.vuejs.org)
- [uni-app](https://uniapp.dcloud.io/)
- [vue-cli](https://cli.vuejs.org/zh/)
- [vuex](https://vuex.vuejs.org/zh/)
- [vue-i18n](https://kazupon.github.io/vue-i18n/)
- [uni-ajax](https://uniajax.ponjs.com/)
- [@modyqyw/mp-scss](https://modyqyw.github.io/mp-scss/)
- [thor-ui](https://www.thorui.cn/doc/)
- [uview-ui](https://www.uviewui.com/)
- [uni-ui](https://uniapp.dcloud.io/component/README?id=uniui)
- [lodash](https://lodash.com/)
- [xe-utils](https://github.com/x-extends/xe-utils#readme)
- [dayjs](https://day.js.org)
- [mock.js](http://mockjs.com/)
- [sass](https://sass-lang.com/) - 使用了 [dart-sass](https://sass-lang.com/dart-sass)，可能会导致图标问题，见 [vue-element-admin issue#3344](https://github.com/PanJiaChen/vue-element-admin/issues/3344)
- [commitizen](http://commitizen.github.io/cz-cli/)
- [commitlint](https://commitlint.js.org/)
- [prettier](https://prettier.io/)
- [markdownlint](https://github.com/igorshubovych/markdownlint-cli#readme)
- [lint-md](https://github.com/lint-md/lint-md#readme)
- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [ls-lint](https://ls-lint.org/)
- [husky](https://github.com/typicode/husky#readme)
- [lint-staged](https://github.com/okonet/lint-staged#readme)
- [@modyqyw/fabric](https://github.com/MillCloud/fabric#readme)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates#readme)

请先阅读上面的文档，并确保你对 node 和 npm 有基本的理解。

## 起步

这部分说明将让你得到能在本地运行的项目副本以开始开发。有关如何部署项目，请阅读 [部署部分](#部署)。

## 准备

你可能需要使用梯子或手机 WiFi 完成准备步骤。

对于 macOS 用户，请按照以下指引操作。

```sh
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
# 设置 nvm 镜像
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
# 安装 node@12
nvm install 12
# 设置 node@12 为默认版本
nvm alias default 12
# 安装 yarn
npm i -g yarn --registry=https://registry.npm.taobao.org

```

接着，请参考 [清华大学开源软件镜像站 Homebrew / Linuxbrew 镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/) 安装 Homebrew。

最后，安装 Git 并修改默认配置。

```sh
# 安装 git
brew install git
# 不自动转换换行符
git config --global core.autocrlf false
# 设置默认分支名为 main
git config --global init.defaultBranch main

```

对于 Windows 用户，请按照以下指引操作。

首先安装 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) 和 [Git](https://git-scm.com/downloads)。

如果你正在使用 [Chocolatey](https://chocolatey.org/)，你也可以通过命令安装。

```sh
choco install nvm
choco install git
```

然后配置即可。

```sh
# 不自动转换换行符
git config --global core.autocrlf false
# 设置默认分支名为 main
git config --global init.defaultBranch main
# 设置 nvm 镜像
nvm node_mirror https://npm.taobao.org/mirrors/node/
# 安装 node@12
nvm install 12.20.2
# 使用 node@12
nvm use 12.20.2
# 安装 yarn
npm i -g yarn --registry=https://registry.npm.taobao.org

```

其它系统请根据以上指引自行调整。

另外，你还需要安装 [HBuilderX 正式版](https://www.dcloud.io/hbuilderx.html) 3.1.4，用于申请一个 appid（DCloud 应用标识，也可以在 [网页](https://dev.dcloud.net.cn/) 上申请），以及把项目运行到真机或模拟器上。

### 安装

```sh
# clone 项目到本地
git clone git@github.com:MillCloud/boilerplate-uni-app.git
# git clone git@gitee.com:MillCloud/boilerplate-uni-app.git
# 进入项目
cd boilerplate-uni-app
# 安装依赖
yarn

```

如果一切正常，此时模板已经可以启动了，请参考 [命令部分](#命令) 正式开始你的开发。但如果你想通过文档了解更多，请先阅读 [主要依赖](#主要依赖) 内链接对应的文档，再继续阅读下去。

## 使用

这部分说明力求使你能自顶向下地理解这个模板已经替你完成的工作，以及你需要自行完成的工作。

### 特性

- 多模式配置示例，支持 development，staging 和 production
- 国际化配置示例，支持 en 和 zh-Hans
- 路由配置示例
- 状态管理配置示例
- 请求配置示例
- 应用信息配置示例

### 命令

模板里内置了较多命令，以适应各种不同的情况。更多的命令你可以查看 [package.json](./package.json)。

启动前请移除 [manifest.json](./src/manifest.json) 内的注释，并使用 HBuilderX 申请一个 appid（DCloud 应用标识）。

|命令|含义|
|-|-|
|`yarn dev:mp-360`|development 模式启动 360 小程序|
|`yarn dev:mp-alipay`|development 模式启动支付宝小程序|
|`yarn dev:mp-baidu`|development 模式启动百度小程序|
|`yarn dev:mp-kuaishou`|development 模式启动快手小程序|
|`yarn dev:mp-qq`|development 模式启动 QQ 小程序|
|`yarn dev:mp-toutiao`|development 模式启动字节跳动小程序|
|`yarn dev:mp-weixin`|development 模式启动微信小程序|
|`yarn dev:quickapp-webview`|development 模式启动快应用|
|`yarn staging-build:mp-360`|staging 模式打包 360 小程序|
|`yarn staging-build:mp-alipay`|staging 模式打包支付宝小程序|
|`yarn staging-build:mp-baidu`|staging 模式打包百度小程序|
|`yarn staging-build:mp-kuaishou`|staging 模式打包快手小程序|
|`yarn staging-build:mp-qq`|staging 模式打包 QQ 小程序|
|`yarn staging-build:mp-toutiao`|staging 模式打包字节跳动小程序|
|`yarn staging-build:mp-weixin`|staging 模式打包微信小程序|
|`yarn staging-build:quickapp-webview`|staging 模式打包快应用|
|`yarn build:mp-360`|production 模式打包 360 小程序|
|`yarn build:mp-alipay`|production 模式打包支付宝小程序|
|`yarn build:mp-baidu`|production 模式打包百度小程序|
|`yarn build:mp-kuaishou`|production 模式打包快手小程序|
|`yarn build:mp-qq`|production 模式打包 QQ 小程序|
|`yarn build:mp-toutiao`|production 模式打包字节跳动小程序|
|`yarn build:mp-weixin`|production 模式打包微信小程序|
|`yarn build:quickapp-webview`|production 模式打包快应用|
|`yarn run clean`|清理 dist 目录|
|`yarn run check`|检查项目依赖版本|
|`yarn commit`|引导填写 git 提交信息并提交，你需要手动 git add 对应部分后执行该命令|
|`yarn i18n:report`|获取国际化信息|
|`yarn lint`|检查 json 文件，脚本文件，样式文件和目录|
|`yarn lint:json`|格式化 json 文件|
|`yarn lint:markdown`|格式化 markdown 文件|
|`yarn lint:script`|检查并自动修复脚本文件|
|`yarn lint:style`|检查并自动修复样式文件|
|`yarn lint:ls`|检查目录|
|`yarn info`|列出环境信息|

注意；如果要开发移动应用，必须用 HBuilderX 运行到模拟器或真机。同时，多模式配置文件只有 `.env`，`.env.development` 和 `.env.production` 有效。

### 项目结构

```sh
.
├── public
├── src
│   ├── apis                    # 接口目录
│   ├── components              # 全局组件目录
│   ├── hooks                   # 钩子函数目录
│   ├── i18n                    # 国际化目录
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
├── .editorconfig
├── .env                        # 所有环境都载入的环境变量
├── .env.development            # development 载入的环境变量
├── .env.production             # production 载入的环境变量
├── .env.staging                # staging 载入的环境变量
├── .eslintignore               # eslint 配置文件
├── .eslintrc.js                # eslint 配置文件
├── .gitattributes              # git 配置文件
├── .gitignore                  # git 配置文件
├── .lintmdrc                   # lint-md 配置文件
├── .ls-lint.yml                # ls-lint 配置文件
├── .markdownlint.json          # markdownlint 配置文件
├── .markdownlintignore         # markdownlint 配置文件
├── .npmrc                      # npm 镜像文件
├── .prettierignore             # prettier 配置文件
├── .yarnrc                     # yarn 镜像文件
├── babel.config.js             # babel 配置文件
├── commitlint.config.js        # commitlint 配置文件
├── CONTRIBUTING.md
├── package.json
├── postcss.config.js           # postcss 配置文件
├── prettier.config.js          # prettier 配置文件
├── README.md
├── stylelint.config.js         # stylelint 配置文件
├── tsconfig.json               # typescript 配置文件
├── vue.config.js               # vue-cli 配置文件
└── yarn.lock
```

### 多模式配置

模板内置了四个环境变量文件。

#### .env

所有模式都会载入这个环境变量文件。

它里面包含了两个国际化变量 `VUE_APP_I18N_LOCALE` 和 `VUE_APP_I18N_FALLBACK_LOCALE`，值都是 `zh-Hans`，表示默认使用简体中文。

#### .env.staging

staging 模式下，这个环境变量文件会被载入。

它使用 `VUE_APP_MODE` 指定当前模式为 staging，`NODE_ENV` 指定运行模式为 production。

请区分当前模式和运行模式。当前模式可以由我们任意指定，而运行模式只能是 development，production 和 test 的其中一个，它会影响实际构建的表现和效果。在代码中，你可以根据实际情况，使用它们对代码做差异化处理。

而 `VUE_APP_BASE_PATH` 指定了请求的前缀地址，值为 `https://fake.url`，这是一个假地址，在实际使用时需要修改。

`.env.development`，`.env.production` 都和 `.env.staging` 的内容大同小异，在这里不再赘述。

如果你还需要添加更多的模式，请参考以上的说明添加对应的环境变量文件。另外，也请修改 `package.json` 内的 scripts，添加对应的构建命令。

#### 开发 APP

开发 APP 时无法控制模式，因此开发 APP 时不需要 `.env.staging` 文件。类似的，也不再需要 `VUE_APP_BASE_PATH` 和 `devServer.proxy` 了。

### 国际化配置

模板内置了两种语言配置，分别是简体中文和英语。

简体中文文件是 [@/i18n/locales/zh-Hans.json](./src/i18n/locales/zh-Hans.json)，英语文件是 [@/i18n/locales/en.json](./src/i18n/locales/en.json)。

你可以在上面两个文件里加入你需要的字段以支持翻译，务必注意字段需要保持一致，也请注意合理地划分字段。

而要引入和 vue2 强绑定的 npm 库的语言包，你可以在 [@/i18n/index.js](./src/i18n/index.js) 内操作。

引入和 vue2 不强绑定的 npm 库的语言包，请查看它们的文档说明。

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

模板封装了 uni-ajax，并将 `$request` 绑定到 vue 实例上。你可以在修改 [封装文件](./src/plugins/request.js) 默认的 uni-ajax 配置以匹配业务。

#### proxy

在 development 模式下请求服务器往往会出现跨域问题，因此模板内已经设置了 `devServer.proxy`，见 [vue.config.js](./vue.config.js) L30。

理论上，`devServer.proxy` 应该与 production 运行模式下的 `VUE_APP_BASE_URL` 一致。

### 应用信息配置

uni-app 使用 [manifest.json](./src/manifest.json) 配置应用信息，请查看[文档](https://uniapp.dcloud.io/collocation/manifest)。

### 页面信息配置

uni-app 使用 [pages.json](./src/pages.json) 配置页面信息，请查看[文档](https://uniapp.dcloud.io/collocation/pages)。

### VSCode 支持

你可以参考 [插件](https://www.yuque.com/modyqyw/environment/skhbfr) 和 [settings.json](https://www.yuque.com/modyqyw/environment/aozv2q)。

### 测试

目前有单元测试，并提供了对 `@/utils` 下两个文件的单元测试。

如果需要添加单元测试，请先学习 [Jest](https://jestjs.io/)。

如果需要添加其它测试，请查看 [文档说明](https://cn.vuejs.org/v2/guide/testing.html)。

## 部署

- 确认所有和 [模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html) 相关的地方已经配置完成。
- 对于小程序，运行对应的命令，然后用开发者工具上传`dist`目录下对应平台的内容。
- 对于 app，用 HBuilderX 云打包或本地安心打包获取安装包。
- 默认会生成报告。

## 浏览器支持

请查看 [.browserslistrc](./.browserslistrc)。

## 贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解行为准则以及提交拉取请求的流程的详细信息。

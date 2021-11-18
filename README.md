# boilerplate-uni-app-vue2

## 简介

`boilerplate-uni-app-vue2` 是一个面向中国用户的的简单 `uni-app` (`vue2`) 模板，目标是帮助你快速搭建小程序/移动端应用。当然，也希望能引导你更进一步地了解 `uni-app`/`vue2` 生态。

**注意：`uni-app` 并不是一个尽善尽美的方案，在很多细节上还有待提高。如果你只是想要开发移动端应用，你可以考虑使用 [boilerplate-vue](https://github.com/MillCloud/boilerplate-vue) 搭配 `cordova`，`native-script` 或 `capacitor`。**

### 主要依赖

- [vue2](https://cn.vuejs.org)
- [vue-cli](https://cli.vuejs.org/zh/)
- [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup)
- [uni-app](https://uniapp.dcloud.io/)
- [vuex](https://vuex.vuejs.org/zh/)
- [@vue/composition-api](https://github.com/vuejs/composition-api/blob/main/README.zh-CN.md)
- [vue2-helpers](https://github.com/ambit-tsai/vue2-helpers)
- [uni-composition-api](https://github.com/TuiMao233/uni-composition-api)
- [vue-use](https://vueuse.org/)
- [typescript](https://www.typescriptlang.org/zh/)
- [luch-request](https://www.quanzhan.co/luch-request/)
- [vue-query](https://vue-query.vercel.app/)
- [statuses](https://github.com/jshttp/statuses)
- [tailwindcss](https://v1.tailwindcss.com/) - 支持了大部分 v2 类值、支持大部分类渐进增强、`0.5` 将会被替换成 `0_5`、`1/2` 将会被替换成 `1-2`，但仍然不要使用高级特性，否则不能支持 Android 5 和 iOS 8，具体可以到 [caniuse](https://caniuse.com/) 查询
- [uni-ui](https://uniapp.dcloud.io/component/README?id=uniui) - 如果想要使用，请先阅读文档并参考文档配置
- [cl-uni](https://docs.cool-js.com/) - 如果想要使用，请先阅读文档并参考文档配置
- [uview-ui](https://www.uviewui.com/) - 如果想要使用，请先阅读文档并参考文档配置
- [thor-ui](https://www.thorui.cn/doc/) - 如果想要使用，请先阅读文档并参考文档配置
- [remix-icon](https://remixicon.com/) - uni-app 不支持 SVG，所以不能使用 iconify
- [@modyqyw/utils](https://github.com/modyqyw/utils)
- [immer](https://immerjs.github.io/immer/)
- [dayjs](https://day.js.org)
- [faker](https://github.com/marak/Faker.js/)
- [mock.js](http://mockjs.com/)
- [sass](https://sass-lang.com/) - 使用了 [dart-sass](https://sass-lang.com/dart-sass)，可能会导致图标问题，见 [vue-element-admin issue#3344](https://github.com/PanJiaChen/vue-element-admin/issues/3344) 和 [sass-loader issue#695](https://github.com/webpack-contrib/sass-loader/issues/695)
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
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# 设置镜像，加快下载速度
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
# 安装 node@lts
nvm install --lts
# 使用 node@lts
nvm use --lts
# 设置默认版本
nvm alias default node
# 安装 pnpm
npm i -g pnpm --registry=https://registry.npmmirror.com
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

首先安装 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip) 和 [Git](https://git-scm.com/downloads)。

然后使用 Windows Terminal 作为终端，Git Bash 作为 Shell，参考 [让 Win10 的终端更好用](https://sspai.com/post/63814) 和 [配置 Windows Terminal](https://sspai.com/post/62167)。

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
# 设置镜像，加快下载速度
nvm node_mirror https://npmmirror.com/mirrors/node
nvm npm_mirror https://npmmirror.com/mirrors/npm
# 安装 node@lts
nvm install lts
# 使用 node@lts
nvm use lts
# 安装 pnpm
npm i -g pnpm --registry=https://registry.npmmirror.com

```

你可能需要配置 `~/.huskyrc`。

其它系统请根据以上指引自行调整。

另外，你还需要安装最新的 [HBuilderX 正式版](https://www.dcloud.io/hbuilderx.html)，用于申请一个 appid（DCloud 应用标识，也可以在 [网页](https://dev.dcloud.net.cn/) 上申请），以及把项目运行到真机或模拟器上。

### 安装和运行

```sh
# clone 项目到本地
git clone git@github.com:MillCloud/boilerplate-uni-app-vue2.git
# git clone git@gitee.com:MillCloud/boilerplate-uni-app-vue2.git
# 进入项目
cd boilerplate-uni-app-vue2
# 安装依赖
npm install --legacy-peer-deps

```

如果一切正常，此时模板已经可以启动了，请参考 [命令部分](#命令) 正式开始开发。但如果想通过文档了解更多，请先阅读 [主要依赖](#主要依赖) 内链接对应的文档，再继续阅读下去。

## 使用

这部分说明力求使你能自顶向下地理解这个模板已经替你完成的工作，以及你需要自行完成的工作。

### 特性

- 路由配置示例
- 状态管理配置示例
- 请求配置示例
- 应用信息配置示例

### 命令

模板里内置了较多命令，以适应各种不同的情况。更多的命令你可以查看 [package.json](./package.json)。

启动前请使用 `HBuilderX` 申请一个 appid（DCloud 应用标识）。

| 命令                             | 含义                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `npm run dev:mp-360`             | `development` 模式启动 360 小程序                                                                            |
| `npm run dev:mp-alipay`          | `development` 模式启动支付宝小程序，需要和 `npm run watch:mp-alipay` 一起使用                                |
| `npm run watch:mp-alipay`        | 为生成的支付宝小程序 axml 文件添加 `<page-meta>` 指定根元素字体大小，需要和 `npm run dev:mp-alipay` 一起使用 |
| `npm run dev:mp-baidu`           | `development` 模式启动百度小程序                                                                             |
| `npm run dev:mp-kuaishou`        | `development` 模式启动快手小程序                                                                             |
| `npm run dev:mp-qq`              | `development` 模式启动 QQ 小程序                                                                             |
| `npm run dev:mp-toutiao`         | `development` 模式启动字节跳动小程序                                                                         |
| `npm run dev:mp-weixin`          | `development` 模式启动微信小程序                                                                             |
| `npm run dev:quickapp-webview`   | `development` 模式启动快应用                                                                                 |
| `npm run build:mp-360`           | `production` 模式打包 360 小程序                                                                             |
| `npm run build:mp-alipay`        | `production` 模式打包支付宝小程序                                                                            |
| `npm run build:mp-baidu`         | `production` 模式打包百度小程序                                                                              |
| `npm run build:mp-kuaishou`      | `production` 模式打包快手小程序                                                                              |
| `npm run build:mp-qq`            | `production` 模式打包 QQ 小程序                                                                              |
| `npm run build:mp-toutiao`       | `production` 模式打包字节跳动小程序                                                                          |
| `npm run build:mp-weixin`        | `production` 模式打包微信小程序                                                                              |
| `npm run build:quickapp-webview` | `production` 模式打包快应用                                                                                  |
| `npm run clean`                  | 清理 `dist` 目录                                                                                             |
| `npm run check:deps`             | 检查项目依赖版本                                                                                             |
| `npm run check:types`            | 检查项目代码类型                                                                                             |
| `npm run commit`                 | 引导填写 git 提交信息并提交，你需要手动 `git add` 对应部分后执行该命令                                       |
| `npm run lint`                   | 检查脚本文件，markdown 文件和样式文件                                                                        |
| `npm run lint:eslint`            | 检查并自动修复脚本文件                                                                                       |
| `npm run lint:markdownlint`      | 格式化 markdown 文件                                                                                         |
| `npm run lint:stylelint`         | 检查并自动修复样式文件                                                                                       |
| `npm run info`                   | 列出环境信息                                                                                                 |

注意；如果要开发移动应用，必须用 `HBuilderX` 运行到模拟器或真机。

### 项目结构

```sh
.
├── .husky                      # husky 配置目录
├── public
├── src
│   ├── components              # 全局组件目录
│   ├── composables             # 组合式 API 目录
│   ├── data                    # 固定数据目录
│   ├── mocks                   # 接口模拟目录
│   ├── pages                   # 页面视图目录
│   ├── plugins                 # 插件目录
│   ├── static                  # 资产目录
│   ├── store                   # 状态管理目录
│   ├── styles                  # 全局样式目录
│   ├── utils                   # 工具方法目录
│   ├── androidPrivacy.json     # Android 隐私政策配置
│   ├── App.vue
│   ├── global.d.ts
│   ├── main.ts
│   ├── manifest.json           # 信息配置文件
│   ├── pages.json              # 页面配置文件
│   ├── shims-luch-request.d.ts
│   ├── shims-tsx.d.ts
│   └── shims-vue.d.ts
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
├── .lintstagedrc.js            # lint-staged 配置文件
├── .markdownlint.json          # markdownlint 配置文件
├── .npmrc                      # npm 配置文件
├── .prettierrc.js              # prettier 配置文件
├── .release-it.js              # release-it 配置文件
├── .stylelintrc.js             # stylelint 配置文件
├── babel.config.js             # babel 配置文件
├── package.json
├── package-lock.json
├── postcss.config.js           # postcss 配置文件
├── README.md
├── tailwind.config.js          # tailwindcss 配置文件
├── tsconfig.json               # typescript 配置文件
├── update-manifest.js          # 配置 release-it 自动更新 manifest.json 的文件
└── vue.config.js               # vue-cli 配置文件
```

### 路由配置

uni-app 使用 [pages.json](./src/pages.json) 配置路由，请查看 [文档](https://uniapp.dcloud.io/collocation/pages)。

### 状态管理配置

模板把状态管理分成了两类，一类是应用类状态，一类是业务类状态。

#### 应用类状态

应用类状态是应用本身的状态，包括应用语言、侧边栏是否展开等。

不建议直接操作 Storage。建议在初始化时，读取 Storage 数据保存到状态仓库，随后从状态仓库读取相应的状态，写入 Storage 时同时更新状态仓库的状态。

如果这些数据不会多页面同时使用，建议不要保存到状态仓库，而是直接保存到组件内。

#### 业务类状态

业务类状态是应用所承载的业务的状态，包括用户信息，页面通用数据等。

不建议保存过多的业务类状态，借助 vue-query，你可以很方便地做数据缓存，你只需要保留必需的业务类状态到状态仓库即可，比如用户信息。

### 请求配置

#### luch-request 封装

模板把 `luch-request` 封装成 `request`，另外还添加了拦截器和适配器以实现自动日志、自动重试。你可以调整 [封装文件](./src/utils/request.js) 默认的配置以匹配业务。

#### proxy

在 `development` 运行模式下请求服务器往往会出现跨域问题，因此模板内已经设置了只在 `development` 运行模式下生效的 `devServer.proxy`，见 [vue.config.js](./vue.config.js) L26。

同时，需要设置 `luch-request` 的 `baseURL` 为空字符串，否则会导致代理失败，见 [@/utils/request.js](./src/utils/request.js) L33。

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

默认启用了 [easycom](https://uniapp.dcloud.io/component/README?id=easycom%e7%bb%84%e4%bb%b6%e8%a7%84%e8%8c%83)，支持 `uni-ui`，`cl-uni`，`uview-ui` 和 `thor-ui`。

### VSCode 支持

你可以参考 [插件](https://www.yuque.com/modyqyw/environment/skhbfr) 和 [settings.json](https://www.yuque.com/modyqyw/environment/aozv2q)。

## 部署

- 确认所有和 [模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html) 相关的地方已经配置完成。
- 运行 `npm run release`，更新版本号。
- 对于小程序，运行对应的命令构建，然后用开发者工具上传 `dist` 目录下对应平台的内容。
- 对于移动端应用，用 `HBuilderX` 云打包或本地安心打包获取安装包。
- 默认会生成报告。
- 更多自定义可以参考 `release-it` 文档说明，使用 `node` 运行脚本完成操作。

## 浏览器支持

请查看 [.browserslistrc](./.browserslistrc)。

## 参考链接

- [uni-app appid 说明](https://ask.dcloud.net.cn/article/35907)
- [uni-app 资源在线升级/热更新](https://ask.dcloud.net.cn/article/35667)
- [uni-app 整包升级/更新方案](https://ask.dcloud.net.cn/article/34972)
- [uni-app 中如何打开外部应用](https://ask.dcloud.net.cn/article/35621)
- [uni-app 运行环境版本和编译器版本不一致的问题](https://ask.dcloud.net.cn/article/35627)
- [uni-app nvue 编译模式](https://ask.dcloud.net.cn/article/36074)
- [uni-app nvue 首页启动模式](https://ask.dcloud.net.cn/article/36749)
- [uni-app Android 云端打包权限配置](https://ask.dcloud.net.cn/article/36982)
- [uni-app 收集信息和权限问题解决](https://uniapp.dcloud.io/app/android-store)
- [uni-app Android 平台隐私与政策提示框配置方法](https://ask.dcloud.net.cn/article/36937)
- [uni-app iOS 平台隐私与政策提示框实现注意问题](https://ask.dcloud.net.cn/article/36955)
- [uni-app Chrome 调试 Android 应用](https://ask.dcloud.net.cn/article/69)
- [uni-app Safari 调试 iOS 应用](https://ask.dcloud.net.cn/article/143)
- [微信小程序项目配置文件](https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html)
- [支付宝小程序配置文件](https://opendocs.alipay.com/mini/framework/project)
- [百度小程序配置文件](https://smartprogram.baidu.com/docs/develop/devtools/editor_set/)
- [字节小程序配置文件](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/framework/basic-reference/catalog-structure/#projectconfigjson-%E9%85%8D%E7%BD%AE%E4%BB%8B%E7%BB%8D)

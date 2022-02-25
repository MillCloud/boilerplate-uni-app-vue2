# boilerplate-uni-app-vue2

## 简介

`boilerplate-uni-app-vue2` 是一个面向中国用户的简单 `uni-app (vue2)` 模板，目标是帮助你快速搭建小程序/移动端应用。当然，也希望能引导你更进一步地了解 `uni-app (vue2)` 生态。

如果你想要快速开发桌面端网页/移动端网页，请考虑使用 [boilerplate-vue2](https://github.com/MillCloud/boilerplate-vue2) 或 [boilerplate-vue3](https://github.com/MillCloud/boilerplate-vue3)。

`uni-app` 并不是一个尽善尽美的方案，在很多细节上还有待提高。如果你只是想要开发移动端应用，也可以考虑使用 [boilerplate-vue2](https://github.com/MillCloud/boilerplate-vue) 或 [boilerplate-vue3](https://github.com/MillCloud/boilerplate-vue3)，加入 [cordova](https://cordova.apache.org/)、[native-script](https://nativescript.org/)、[ionic](https://ionicframework.com/) 或 [capacitor](https://capacitorjs.com/)。

**2022-02-07 Vue 3 成为新的默认版本。该模板只会支持 Vue 2 最新版本到 EOL。**

### 主要依赖

- [vue2](https://cn.vuejs.org)
- [vue-cli](https://cli.vuejs.org/zh/)
- [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup)
- [uni-app](https://uniapp.dcloud.io/)
- [pinia](https://pinia.esm.dev/)
- [@vue/composition-api](https://github.com/vuejs/composition-api/blob/main/README.zh-CN.md)
- [vue2-helpers](https://github.com/ambit-tsai/vue2-helpers)
- [uni-composition-api](https://github.com/TuiMao233/uni-composition-api)
- [vue-use](https://vueuse.org)
- [typescript](https://www.typescriptlang.org/zh/)
- [vue2-helpers](https://github.com/ambit-tsai/vue2-helpers)
- [luch-request](https://www.quanzhan.co/luch-request/)
- [statuses](https://github.com/jshttp/statuses)
- [tailwindcss](https://v1.tailwindcss.com/) - 支持了大部分 v2 类值、支持大部分类渐进增强、`0.5` 将会被替换成 `0_5`、`1/2` 将会被替换成 `1-2`，但仍然不要使用高级特性，否则不能支持 Android 5 和 iOS 8，具体可以到 [caniuse](https://caniuse.com/) 查询
- [uni-ui](https://uniapp.dcloud.io/component/README?id=uniui) - 如果想要使用，请先阅读文档并参考文档配置
- [uview-ui](https://www.uviewui.com/) - 如果想要使用，请先阅读文档并参考文档配置
- [remix-icon](https://remixicon.com/) - uni-app 不支持 SVG，所以不能使用 [iconify](https://iconify.design/)
- [lodash](https://lodash.com/)
- [ramda](https://ramdajs.com/)
- [dayjs](https://day.js.org)
- [sass](https://sass-lang.com/)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates)

请先阅读上面的文档，并确保对 `node` 和 `npm` 有 [基本了解](http://nodejs.cn/learn)。

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

运行到支付宝小程序时，除运行 `npm run dev:mp-alipay`，还需要运行 `npm run watch:mp-alipay` 以保证样式正确。

## 使用

### 目录结构

```sh
.
├── .github                     # github 配置目录
├── .husky                      # husky 配置目录
├── public
├── src
│   ├── components              # 全局组件目录
│   ├── composables             # 全局组合式 API 目录
│   ├── constants               # 固定数据目录
│   ├── pages                   # 页面视图目录
│   ├── plugins                 # 插件目录
│   ├── static                  # 资产目录
│   ├── stores                  # 状态仓库目录
│   ├── styles                  # 全局样式和全局变量目录
│   ├── utils                   # 工具方法目录
│   ├── androidPrivacy.json     # Android 隐私政策配置
│   ├── App.vue
│   ├── global.d.ts
│   ├── main.ts
│   ├── manifest.json           # 信息配置文件
│   ├── pages.json              # 页面配置文件
│   ├── shims-jsx.d.ts
│   ├── shims-luch-request.d.ts
│   └── shims-vue.d.ts
├── unpackage                   # 打包时使用的资产文件夹
├── .browserslistrc             # 浏览器支持列表文件
├── .commitlintrc.js            # commitlint 配置文件
├── .editorconfig
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
├── patch-mp-alipay.js          # 运行到支付宝小程序时的 patch
├── README.md
├── tailwind.config.js          # tailwindcss 配置文件
├── tsconfig.json               # typescript 配置文件
├── update-manifest.js          # 配置 release-it 自动更新 manifest.json 的文件
└── vue.config.js               # vue-cli 配置文件
```

### VSCode 支持

你可以参考 [插件](https://modyqyw.top/environment/#%E6%8F%92%E4%BB%B6) 和 [settings.json](https://modyqyw.top/environment/#settings-json)。

### 路由

uni-app 使用 [pages.json](./src/pages.json) 配置路由，请查看 [文档](https://uniapp.dcloud.io/collocation/pages)。

### 状态

使用 [pinia](https://pinia.vuejs.org/) 作为状态管理工具。

### 请求

使用 [luch-request](https://github.com/lei-mu/luch-request) 请求。

查看 [@/utils/request.ts](./src/utils/request.ts) 了解预设配置。

如果不喜欢 vue-query，也可以自行配置 [useFetch](https://vueuse.org/core/useFetch/) 或 [useAxios](https://vueuse.org/integrations/useAxios/) 使用。

### 应用信息配置

uni-app 使用 [manifest.json](./src/manifest.json) 配置应用信息，请查看 [文档](https://uniapp.dcloud.io/collocation/manifest)。

### 页面信息配置

uni-app 使用 [pages.json](./src/pages.json) 配置页面信息，请查看 [文档](https://uniapp.dcloud.io/collocation/pages)。

默认启用了 [easycom](https://uniapp.dcloud.io/component/README?id=easycom%e7%bb%84%e4%bb%b6%e8%a7%84%e8%8c%83)，支持 `uni-ui` 和 `uview-ui`。

## 部署

- 确认所有模式和环境变量相关的地方已经配置完成，参考 [vue-cli 文档 - 模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)。
- 运行 `npm run release`，更新版本号。
- 对于小程序，运行对应的命令构建，然后用开发者工具上传 `dist` 目录下对应平台的内容。
- 对于移动端应用，用 `HBuilderX` 云打包或本地安心打包获取安装包自行处理。
- 更多自定义可以参考 `release-it` 文档说明，使用 `node` 运行脚本完成操作。

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

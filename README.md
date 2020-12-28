# boilerplate-uni-app

uni-app 模板。

## 起步

这些说明将让你得到能在本地启动、运行的项目副本以进行开发和测试。有关如何在实时系统上部署项目，请参阅[部署](#部署)。

## 准备

你可能需要使用梯子或手机 WiFi 完成准备步骤。

- Node 镜像[参考](https://developer.aliyun.com/mirror/NPM)
- Homebrew 镜像[参考](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

### macOS

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node
nvm install 12
nvm alias default 12
npm i -g yarn
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git
git -C "$(brew --repo homebrew/cask-fonts)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask-fonts.git
git -C "$(brew --repo homebrew/cask-drivers)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask-drivers.git
brew update
brew install git

```

### Windows

首先安装 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip) 和 [Git](https://git-scm.com/downloads)。

```sh
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
nvm install 12.20.0
nvm use 12.20.0
npm i -g yarn

```

### 安装

```sh
# clone
git clone git@github.com:MillCloud/boilerplate-uni-app.git
# or gitee
# git clone git@gitee.com:MillCloud/boilerplate-uni-app.git

# enter the directory
cd boilerplate-uni-app

# install dependency
yarn

# build for development
# use hbuilderx to build for app development
yarn dev:mp-360
yarn dev:mp-alipay
yarn dev:mp-baidu
yarn dev:mp-kuaishou
yarn dev:mp-qq
yarn dev:mp-toutiao
yarn dev:mp-weixin
yarn dev:quickapp-native
yarn dev:quickapp-webview
yarn dev:quickapp-webview-huawei
yarn dev:quickapp-webview-union

# build for staging
# use hbuilderx to build for app production
yarn staging-build:mp-360
yarn staging-build:mp-alipay
yarn staging-build:mp-baidu
yarn staging-build:mp-kuaishou
yarn staging-build:mp-qq
yarn staging-build:mp-toutiao
yarn staging-build:mp-weixin
yarn staging-build:quickapp-native
yarn staging-build:quickapp-webview
yarn staging-build:quickapp-webview-huawei
yarn staging-build:quickapp-webview-union

# build for production
# use hbuilderx to build for app production
yarn build:mp-360
yarn build:mp-alipay
yarn build:mp-baidu
yarn build:mp-kuaishou
yarn build:mp-qq
yarn build:mp-toutiao
yarn build:mp-weixin
yarn build:quickapp-native
yarn build:quickapp-webview
yarn build:quickapp-webview-huawei
yarn build:quickapp-webview-union

# lint json, scripts, styles and ls
yarn lint

# check deps
yarn run check

# clean dist
yarn clean

# git commit and git push
# git add should be handled by yourself
yarn commit

# get uni-app info
yarn run info
```

### 项目结构

```sh
.
├── public
├── src
│   ├── apis                    # 接口目录，也可以在 store 对应的 module 文件书写接口
│   ├── components              # 全局组件目录
│   ├── hooks                   # 钩子函数目录
│   ├── i18n                    # 国际化目录
│   │   ├── index.js
│   │   └── locales             # 对应语言文件
│   ├── plugins                 # 插件目录
│   │   ├── composition-api.js  # 支持@vue/composition-api
│   │   ├── index.js
│   │   ├── request.js          # 支持 uni-ajax
│   ├── static                  # 资产目录
│   ├── router                  # 路由目录
│   ├── store                   # 状态管理目录
│   ├── styles                  # 全局样式目录
│   ├── utils                   # 工具类目录
│   ├── views                   # 页面视图目录
│   ├── App.vue
│   ├── main.js
│   ├── manifest.json           # 信息配置文件
│   └── pages.json              # 页面配置文件
├── .browserslistrc             # 浏览器支持列表文件
├── .editorconfig
├── .env                        # 所有环境都载入的环境变量
├── .env.development            # development 载入的环境变量
├── .env.production             # production 载入的环境变量
├── .env.staging                # staging 载入的环境变量
├── .eslintrc.js                # eslint 配置文件
├── .gitattributes
├── .gitignore
├── .ls-lint.yml                # ls-lint 配置文件
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

## 测试

目前没有测试。欢迎 PR。

## 部署

- 确认所有和[模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)相关的地方已经配置完成。
- 对于小程序，运行对应的命令，然后用开发者工具上传`dist`目录下对应平台的内容。
- 对于 app，用 hbuilderx 云打包获取安装包，相关资料应从负责人处获取。
- 默认会生成报告。

## 主要依赖

- [vue](https://vuejs.org)
- [uni-app](https://uniapp.dcloud.io/)
- [vue-cli](https://cli.vuejs.org/)
- [vuex](https://vuex.vuejs.org/)
- [vue-composition-api](https://composition-api.vuejs.org/)
- [vue-use](https://vueuse.js.org/)
- [vue-i18n](https://kazupon.github.io/vue-i18n/)
- [uni-ajax](https://uniajax.ponjs.com/)
- [uview-ui](https://www.uviewui.com/)
- [uni-ui](https://uniapp.dcloud.io/component/README?id=uniui)
- [@modyqyw/mp-scss](https://modyqyw.github.io/mp-scss/)
- [lodash](https://lodash.com/)
- [xe-utils](https://github.com/x-extends/xe-utils#readme)
- [dayjs](https://day.js.org)
- [mock.js](http://mockjs.com/)
- [sass](https://sass-lang.com/) - 使用了 [dart-sass](https://sass-lang.com/dart-sass)，可能会导致图标问题，见 [vue-element-admin issue#3344](https://github.com/PanJiaChen/vue-element-admin/issues/3344)
- [commitizen](http://commitizen.github.io/cz-cli/)
- [commitlint](https://commitlint.js.org/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [ls-lint](https://ls-lint.org/)
- [husky](https://github.com/typicode/husky#readme)
- [lint-staged](https://github.com/okonet/lint-staged#readme)
- [@modyqyw/fabric](https://github.com/MillCloud/fabric#readme)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates#readme)

## 浏览器支持

请查看 [.browserslistrc](./.browserslistrc)。

## 贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解行为准则以及提交拉取请求的流程的详细信息。

## 作者

- **Rui Wu** - *最初工作* - [ModyQyW](https://github.com/ModyQyW)

另请参阅参与此项目的 [contributors](https://github.com/ModyQyW/boilerplate-uni-app/contributors) 列表。

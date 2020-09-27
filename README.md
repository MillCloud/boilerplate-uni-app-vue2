# test-uni-app

English | [简体中文](./README.zh-Hans.md)

---

A repo for testing uni-app.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- Using nvm, node lts, npm lts and yarn is recommended.
  - Install nvm first
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm#readme)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows#readme) - [known issue #300](https://github.com/coreybutler/nvm-windows/issues/300)
  - Install node lts in terminal / command line
  - Globally update npm to lts and install yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - Mirrors are set by default for Chinese users
- Git is also required.
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - It is recommended to use [Homebrew](https://brew.sh/) to install git on Mac

### Installing

```sh
# clone
git clone git@github.com:MillCloud/test-uni-app.git

# enter the directory
cd test-uni-app

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

## Running the tests

No tests now. Pull requests are welcome.

## Deployment

- Make sure everything related to [modes and environment variables](https://cli.vuejs.org/guide/mode-and-env.html) is fine.
- Run `yarn build:platform` and upload the contents of the corresponding folder with developer tools.
- Use hbuilderx for app production and deploy by yourself.

## Built With

- [vue](https://vuejs.org)
- [vue-cli](https://cli.vuejs.org/)
- [vuex](https://vuex.vuejs.org/)
- [vue-composition-api](https://composition-api.vuejs.org/)
- [uview-ui](https://www.uviewui.com/)
- [uni-ui](https://uniapp.dcloud.io/component/README?id=uniui)
- [lodash](https://lodash.com/)
- [xe-utils](https://github.com/x-extends/xe-utils#readme)
- [dayjs](https://day.js.org)
- [mock.js](http://mockjs.com/)
- [sass](https://sass-lang.com/) - using [dart-sass](https://sass-lang.com/dart-sass) here, which may causes icons error, check [vue-element-admin issue#3344](https://github.com/PanJiaChen/vue-element-admin/issues/3344)
- [commitlint](https://commitlint.js.org/)
- [commitizen](http://commitizen.github.io/cz-cli/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [ls-lint](https://ls-lint.org/)
- [husky](https://github.com/typicode/husky#readme)
- [lint-staged](https://github.com/okonet/lint-staged#readme)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates#readme)

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## Authors

- **Rui Wu** - *Initial work* - [ModyQyW](https://github.com/ModyQyW)

See also the list of [contributors](https://github.com/MillCloud/test-uni-app/contributors) who participated in this project.

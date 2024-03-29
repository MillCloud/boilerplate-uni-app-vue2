/* eslint-disable no-template-curly-in-string */
module.exports = {
  git: {
    commitMessage: 'chore(release): v${version}',
    tagName: 'v${version}',
  },
  npm: {
    publish: false,
  },
  github: {
    release: false,
  },
  gitlab: {
    release: false,
  },
  hooks: {
    'before:init': 'npm install --legacy-peer-deps && npm run lint',
    'after:bump': 'node update-manifest.js',
  },
};
/* eslint-enable no-template-curly-in-string */

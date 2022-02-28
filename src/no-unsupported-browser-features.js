const {packageJson} = require('./utils/files/contents');
const locate = require('./utils/files/locate');

const browserlistConfig = packageJson.browserslist || locate('.browserslistrc');

const config = {
    plugins: ['stylelint-no-unsupported-browser-features'],
    rules: {
        'plugin/no-unsupported-browser-features': true,
    },
};

module.exports = browserlistConfig ? config : {};

const {readJsonSync} = require('fs-extra');

const locate = require('./locate');

const packageJson = readJsonSync(locate('package.json'), {throws: false}) || {};

module.exports = {
    packageJson,
};

const dotProp = require('dot-prop');
const readPkgUp = require('read-pkg-up');

const debug = require('./src/debug');
const order = require('./src/order');
const scss = require('./src/stylelint');
const stylelint = require('./src/stylelint');

const pkg = readPkgUp.sync() || {};

const getUsage = (dependency) =>
    dotProp.get(pkg, `package.dependencies.${dependency}`) || dotProp.get(pkg, `package.devDependencies.${dependency}`);

const config = {
    plugins: ['stylelint-at-rule-no-debug', 'stylelint-order', 'stylelint-scss'],
    rules: {
        ...debug,
        ...order,
        ...scss,
        ...stylelint
    }
};

if (getUsage('prettier')) {
    config.rules = {
        ...config.rules,
        ...require('stylelint-config-prettier').rules
    };
}

module.exports = config;

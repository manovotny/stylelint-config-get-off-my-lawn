const dotProp = require('dot-prop');
const readPkgUp = require('read-pkg-up');

const atRuleNoChildren = require('./src/at-rule-no-children');
const atRuleNoDebug = require('./src/at-rule-no-debug');
const order = require('./src/order');
const scss = require('./src/stylelint');
const selectorNoEmpty = require('./src/selector-no-empty');
const stylelint = require('./src/stylelint');

const pkg = readPkgUp.sync() || {};

const getUsage = (dependency) =>
    dotProp.get(pkg, `package.dependencies.${dependency}`) || dotProp.get(pkg, `package.devDependencies.${dependency}`);

const config = {
    plugins: [
        'stylelint-at-rule-no-children',
        'stylelint-at-rule-no-debug',
        'stylelint-order',
        'stylelint-selector-no-empty',
        'stylelint-scss'
    ],
    rules: {
        ...atRuleNoChildren,
        ...atRuleNoDebug,
        ...order,
        ...scss,
        ...selectorNoEmpty,
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

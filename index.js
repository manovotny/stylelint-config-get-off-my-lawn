const {mergeAndConcat} = require('merge-anything');

const a11y = require('./src/a11y');
const cssModulesNoGlobalScopedSelector = require('./src/css-modules-no-global-scoped-selector');
const noUnsupportedBrowserFeatures = require('./src/no-unsupported-browser-features');
const order = require('./src/order');
const prettier = require('./src/prettier');
const reactNative = require('./src/react-native');
const selectorNoEmpty = require('./src/selector-no-empty');
const stylelint = require('./src/stylelint');

const config = mergeAndConcat(
    // Order of these doesn't matter.
    a11y,
    cssModulesNoGlobalScopedSelector,
    noUnsupportedBrowserFeatures,
    order,
    reactNative,
    selectorNoEmpty,
    stylelint,
    // These need to be listed last, and in this order, to override
    // or modify rules in the various configs above, as needed.
    prettier
);

module.exports = config;

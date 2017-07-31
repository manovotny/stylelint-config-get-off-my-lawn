const csstree = require('./src/csstree');
const order = require('./src/order');
const scss = require('./src/stylelint');
const stylelint = require('./src/stylelint');

module.exports = {
    plugins: [
        'stylelint-csstree-validator',
        'stylelint-order',
        'stylelint-scss'
    ],
    rules: Object.assign(
        {},
        csstree,
        order,
        scss,
        stylelint
    )
};

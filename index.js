const order = require('./src/order');
const scss = require('./src/stylelint');
const stylelint = require('./src/stylelint');

module.exports = {
    plugins: [
        'stylelint-order',
        'stylelint-scss'
    ],
    rules: Object.assign(
        {},
        order,
        scss,
        stylelint
    )
};

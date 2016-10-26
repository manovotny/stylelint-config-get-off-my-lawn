const stylelint = require('./src/stylelint');
const scss = require('./src/stylelint');

module.exports = {
    plugins: [
        'stylelint-scss'
    ],
    rules: Object.assign(
        {},
        stylelint,
        scss
    )
};

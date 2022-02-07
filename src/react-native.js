const {reactNative} = require('./utils/dependencies');

const config = {
    plugins: ['stylelint-react-native'],
    rules: {
        'react-native/css-property-no-unknown': true,
        'react-native/font-weight-no-ignored-values': true,
        'react-native/style-property-no-unknown': true,
    },
};

module.exports = reactNative ? config : {};

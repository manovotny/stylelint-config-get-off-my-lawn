const {packageJson} = require('./files/contents');

const find = (dependency) => packageJson.dependencies?.[dependency] || packageJson.devDependencies?.[dependency];

module.exports = {
    prettier: find('prettier'),
    reactNative: find('react-native'),
};

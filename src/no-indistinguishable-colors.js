module.exports = {
    plugins: ['stylelint-no-indistinguishable-colors'],
    rules: {
        'plugin/stylelint-no-indistinguishable-colors': [
            true,
            {
                allowEquivalentNotation: true,
            },
        ],
    },
};

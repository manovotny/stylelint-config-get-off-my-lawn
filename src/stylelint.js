module.exports = {
    'at-rule-empty-line-before': [
        'always',
        {
            except: [
                'blockless-group',
                'first-nested'
            ],
            ignore: [
                'after-comment'
            ]
        }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': [
        true,
        {
            ignoreAtRules: [
                'at-root',
                'content',
                'debug',
                'each',
                'else',
                'error',
                'extend',
                'for',
                'function',
                'if',
                'include',
                'mixin',
                'placeholder',
                'return',
                'warn',
                'while'
            ]
        }
    ],
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-no-empty': true,
    'block-no-single-line': true,
    'block-opening-brace-newline-after': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
        'always',
        {
            except: [
                'first-nested'
            ],
            ignore: [
                'between-comments',
                'stylelint-commands'
            ]
        }
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-blacklist': [
        '/^TODO:/'
    ],
    'custom-media-pattern': '^[a-z][a-z0-9-]+$',
    'custom-property-empty-line-before': 'never',
    'custom-property-no-outside-root': true,
    'custom-property-pattern': '^[a-z][a-z0-9-]+$',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-ignored-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-properties-order': 'alphabetical',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': [
        'named-where-possible',
        {
            ignore: [
                'relative'
            ]
        }
    ],
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'indentation': 4,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-nesting-depth': [
        4,
        {
            ignore: [
                'at-rules-without-declaration-blocks'
            ]
        }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-no-missing-punctuation': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'never-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'never',
    'number-max-precision': 2,
    'number-no-trailing-zeros': true,
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'root-no-standard-properties': true,
    'rule-nested-empty-line-before': [
        'always',
        {
            except: [
                'first-nested'
            ],
            ignore: [
                'after-comment'
            ]
        }
    ],
    'rule-non-nested-empty-line-before': [
        'always',
        {
            except: [
                'after-single-line-comment'
            ],
            ignore: [
                'after-comment'
            ]
        }
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
        '^[a-z](?:-[a-z\\d]|[a-z\\d])*$',
        {
            resolveNestedSelectors: true
        }
    ],
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': '^[a-z][a-z0-9-]+$',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-compound-selectors': 4,
    'selector-max-empty-lines': 0,
    'selector-no-empty': true,
    'selector-no-id': true,
    'selector-no-type': [
        true,
        {
            ignore: [
                'descendant'
            ]
        }
    ],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-root-no-composition': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'time-no-imperceptible': true,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': true
};

export default {
    '@typescript-eslint/indent': [2, 6],

    '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
    ],

    '@typescript-eslint/member-delimiter-style': 2,

    '@typescript-eslint/no-unused-vars': [
        2,
        {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
        },
    ],

    '@typescript-eslint/explicit-module-boundary-types': [
        'warn',
        {
            allowArgumentsExplicitlyTypedAsAny: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
        },
    ],

    '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
            accessibility: 'explicit',
            overrides: {
                accessors: 'explicit',
                constructors: 'no-public',
                methods: 'explicit',
                properties: 'explicit',
                parameterProperties: 'explicit',
            },
        },
    ],

    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],

    '@typescript-eslint/no-use-before-define': 1,

    '@typescript-eslint/ban-types': 0,

    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-non-null-assertion': 'off',
};

module.exports = {
    extends: ['plugin:react/recommended', 'eslint:recommended', 'plugin:jest/recommended', 'prettier'],
    plugins: ['react', 'babel', 'jest'],
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-nested-ternary': ['error'],
        'linebreak-style': ['error', 'unix'],
        'no-unused-vars': ['warn'],
        'no-console': 2,
        'no-redeclare': 'warn',
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        'generator-star-spacing': ['error', { before: true, after: false }]
    },
    parserOptions: {
        ecmaFeatures: { jsx: true },

        sourceType: 'module',
        ecmaVersion: 6
    },
    globals: {
        React: true
    },
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            version: 15.4,
            flowVersion: '0.53'
        },

        propWrapperFunctions: ['forbidExtraProps'],
        'import/resolver': {
            'babel-module': {
                extensions: ['.jsx', '.js']
            }
        }
    }
};

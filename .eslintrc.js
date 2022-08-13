module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:react/recommended',
        'plugin:import/errors', // 追加
        'plugin:import/warnings', // 追加
        'plugin:import/typescript', // 追加
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json', // 追加
    },
    plugins: ['react', '@typescript-eslint', 'import'],
    rules: {
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
};

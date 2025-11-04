export default {
    /*
     * Деструктуризация в 'props', 'state', 'context' необязательна.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    'react/destructuring-assignment': 0,

    /*
     * Поле 'displayName' у компонента необязателен.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    'react/display-name': ['error', { ignoreTranspilerName: false }],

    /*
     * Запрещается обращаться к 'this.state' внутри 'setState'.
     * Это может привести к ошибкам, связанным с потерей актуального состояния стейта, когда в очереди несколько
     * вызовов 'setState'. Для получения текущего стейта используйте колбэк.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     */
    'react/no-access-state-in-setstate': 2,

    /*
     * Между компонентами, написанными в строку должны быть пробелы.
     * Компоненты не выглядят слипнувшимися и это добавляет аккуратности.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
     */
    'react/no-adjacent-inline-elements': 2,

    /*
     * Запрещается использовать индексы массивов для 'key' в React-компонентах.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'error',

    /*
     * Запрещает использование устаревших методов жизненного цикла
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    'react/no-deprecated': 'error',

    /*
     * Запрещает использование неиспользуемых пропсов
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    'react/no-unused-prop-types': 'error',

    /*
     * Требует проверки пропсов с помощью PropTypes
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    'react/prop-types': [
        'error',
        {
            skipUndeclared: true,
            ignore: ['children', 'className', 'style'],
        },
    ],

    /*
     * Требует использования дефолтных значений для необязательных пропсов
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    'react/require-default-props': [
        'error',
        {
            forbidDefaultForRequired: true,
        },
    ],

    /*
     * Запрещает пустые фрагменты
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    'react/jsx-no-useless-fragment': 'error',

    /*
     * Запрещается использование 'опасных' пропсов.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     */
    'react/no-danger': 2,

    /*
     * Запрещается мутировать стейт напрямую (кроме конструктора класса).
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    'react/no-direct-mutation-state': 2,

    /*
     * Предпочитать 'SFC', нежели классы.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    'react/prefer-stateless-function': 1,

    /*
     * Стейт создается только в теле класса (не в конструкторе).
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
     */
    'react/state-in-constructor': [2, 'never'],

    /*
     * Статичные поля описываются только в теле ES6 класса.
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
     */
    'react/static-property-placement': 0,
};

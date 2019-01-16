module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'codebox'],
  globals: {
    localStorage: true
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 125,
        trailingComma: 'all',
        semi: false
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      }
    ],
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    'import/first': ['warn', 'DISABLE-absolute-first'],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'max-len': 'off',
    'no-mixed-operators': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/jsx-no-bind': 'off',
    'react/no-array-index-key': 'off',
    'react/no-string-refs': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-indent-props': [2, 2],
    'react/no-typos': 'off', // https://github.com/yannickcr/eslint-plugin-react/issues/1389
    'codebox/sort-imports': [
      'error',
      {
        groups: [
          'builtin', // builtin dependencies go first
          'external', // then external dependencies
          'parent', // then parent
          'sibling', // ...ok, you got it
          'index',
          ['unknown', 'absolute'] // An array inside array of groups means that these two groups share same priority for sorting
        ],
        importTypes: [
          'default', // Default imports are at top of each group
          'named', // After that - named imports
          'all', // Imports of the whole namespace
          'none' // Plain import
        ],
        ignoreCase: true // Indicates whether we want to ignore case during alphabetical sorting
      }
    ],
    'codebox/sort-named-imports': [
      'error',
      {
        ignoreCase: true // Indicates whether we want to ignore case during alphabetical sorting
      }
    ]
  }
}

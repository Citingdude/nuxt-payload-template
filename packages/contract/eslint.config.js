import WisemenEslintConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await WisemenEslintConfig),
  {
    rules: {
      'path/no-relative-imports': 'off',
      'ts/explicit-function-return-type': 'off',
    },
  },
]

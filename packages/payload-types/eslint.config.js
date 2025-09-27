import WisemenEslintConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await WisemenEslintConfig),
  {
    ignores: [
      '**/payload-types.ts',
    ],
    rules: {
      'ts/explicit-function-return-type': 'off',
    },
  },
]

import WisemenEslintConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await WisemenEslintConfig),
  {
    rules: {
      'test/expect-expect': [
        'error',
        {
          additionalTestBlockFunctions: [],
          assertFunctionNames: [
            'expect',
            'assert',
            'assertType',
            'expectTypeOf',
          ],
        },
      ],
      'ts/explicit-function-return-type': 'off',
    },
  },
]

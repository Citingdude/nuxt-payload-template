import WisemenEslintConfig from '@wisemen/eslint-config-vue'

const baseConfig = await WisemenEslintConfig

export default ([
  ...baseConfig,
  {
    rules: {
      'better-tailwindcss/no-unregistered-classes': 'off',
      'check-file/folder-naming-convention': 'off',
      'eslint-plugin-wisemen/explicit-function-return-type-with-regex': 'off',
      'func-style': 'off',
      'project-structure/independent-modules': 'off',
      'ts/explicit-function-return-type': 'off',
      'unicorn/no-empty-file': 'off',
    },
  },
  {
    ignores: [
      '**/app/(payload)',
      '**/migrations',
      '**/payload-types.ts',
      '**/.turbo',
    ],
  },
])

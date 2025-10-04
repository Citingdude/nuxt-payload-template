import WisemenEslintConfig from '@wisemen/eslint-config-vue'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...(await WisemenEslintConfig),
  {
    ignores: [
      '**/layers/base/components/core/sonner/Toaster.vue',
      '.nuxt/*',
      'node_modules/*',
      '.vscode/*',
    ],
  },
  {
    rules: {
      'better-tailwindcss/no-unregistered-classes': 'off',
      'eslint-plugin-wisemen/explicit-function-return-type-with-regex': 'off',
      'project-structure/independent-modules': 'off',
      'ts/explicit-function-return-type': 'off',
    },
  },
)

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  semi: false,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'tv'],
}

export default config

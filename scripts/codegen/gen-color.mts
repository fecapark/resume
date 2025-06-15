import { fs } from 'zx'

import { indent, log, sourceBasePath, writeFileEnsureDirectorySync } from './common.mts'

const stylesheetsBasePath = `${sourceBasePath}/styles`
const variablesFileName = 'color.variable.css'
const variablesFilePath = `${stylesheetsBasePath}/${variablesFileName}`
const resultPath = `${stylesheetsBasePath}/__generated__/color.gen.css`
const moudleResultPath = `${stylesheetsBasePath}/__generated__/color.gen.ts`

function assertFileExist(path: string) {
  if (!fs.existsSync(variablesFilePath)) {
    log.error(
      `${path.replace(sourceBasePath + '/', '')}를 찾을 수 없어요:\n입력: ${variablesFilePath}`,
      {
        throwError: true,
      }
    )
  }
}

function readColorVariableFile() {
  return fs.readFileSync(variablesFilePath, 'utf-8')
}

function readColorVariableNames(file: string) {
  const variables = file.match(/:root\s*{([^}]*)}/s)?.[1]
  if (!variables) {
    log.error(`${variablesFileName} 파일 내에 :root { ... } 블록을 찾을 수 없어요.`)
    return []
  }

  return variables
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('--'))
    .map((line) => line.split(':')[0].trim())
}

function convertToTailwindThemeColorTokens(variables: string[]) {
  return variables.map((variable) => {
    const name = variable.replace('--', '')
    return `${indent}--color-${name}: var(${variable});`
  })
}

function getGeneratedResult(tokens: string[]) {
  const comment = '/* scripts/codegen/gen-color.ts에 의해서 자동으로 채워져요. */\n'
  const importTailwind = "@import 'tailwindcss';"
  const importVariables = `@import '../${variablesFileName}';`
  const themeBlock = `\n@theme {\n${tokens.join('\n')}\n}`

  return [comment, importVariables, importTailwind, themeBlock].join('\n')
}

function getGeneratedModuleResult(variables: string[]) {
  const makeKeyVal = (variable: string) => {
    const name = variable.replace('--', '')
    return `${indent}${name}: 'var(${variable})'`
  }

  const comment = '/* scripts/codegen/gen-color.ts에 의해서 자동으로 채워져요. */'
  const varsModule = `\nexport const vars = {\n${variables.map(makeKeyVal).join(',\n')}\n};`
  const types = `\nexport type ColorVars = keyof typeof vars;`

  return [comment, varsModule, types].join('\n')
}

function main() {
  log.running('CSS 변수를 Tailwind 토큰과 모듈로 변환하고 있어요...\n', { pre: '\n' })

  assertFileExist(variablesFilePath)

  const varFile = readColorVariableFile()
  const variables = readColorVariableNames(varFile)
  const tokens = convertToTailwindThemeColorTokens(variables)
  const result = getGeneratedResult(tokens)

  writeFileEnsureDirectorySync(resultPath, result)
  writeFileEnsureDirectorySync(moudleResultPath, getGeneratedModuleResult(variables))

  log.success(`Tailwind 색상 토큰과 색상 모듈을 추가했어요.`, {
    end: '\n',
  })
}

main()

import { readFileSync, writeFileSync } from 'node:fs'

const TYPE_STRING = '/** @type {Record<string, any>} */'
const INSERT_BEFORE_STRING = 'export const importMap = {'

export function addTypeAnnotationToImportMap() {
  const importMapFile = readFileSync('./src/app/(payload)/importMap.js', 'utf-8')

  const splittedFile = importMapFile.split('\n')

  if (splittedFile.includes(TYPE_STRING)) {
    return
  }

  const constructedFile = splittedFile.map((line) => {
    if (line.includes(INSERT_BEFORE_STRING)) {
      return `${TYPE_STRING}\n${INSERT_BEFORE_STRING}`
    }

    return line
  })

  writeFileSync('./src/app/(payload)/importMap.js', constructedFile.join('\n'))
}

addTypeAnnotationToImportMap()

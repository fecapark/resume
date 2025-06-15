const config = {
  '**/*.{js,jsx,ts,tsx}': (stagedFiles) => {
    const filteredPatterns = ['__generated__', '.gen.']

    const filteredStagedFiles = stagedFiles
      .filter((file) => {
        const isGenerated = filteredPatterns.some((pattern) => {
          return file.includes(pattern)
        })
        return !isGenerated
      })
      .join(' ')

    return filteredStagedFiles
      ? [`eslint --fix ${filteredStagedFiles}`, `prettier --write ${filteredStagedFiles}`]
      : []
  },
}

export default config

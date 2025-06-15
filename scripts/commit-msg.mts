import { fs } from 'zx'

const commitMessagePath = process.argv[2]

if (commitMessagePath) {
  const commitMessage = fs.readFileSync(commitMessagePath, 'utf-8').trim()
  // https://gitmoji.dev/
  const newCommitMessage = commitMessage
    // 🐛 Fix a bug.
    .replace(/^b /, ':bug: ')
    // 🎨 Improve Structure / format of the codes.
    .replace(/^a /, ':art: ')
    // 🔥 Remove code or files.
    .replace(/^f /, ':fire: ')
    // ✨ Introduce new features.
    .replace(/^s /, ':sparkles: ')
    // 💄 Update UI and style files.
    .replace(/^l /, ':lipstick: ')
    // ♻️ Refactor code.
    .replace(/^r /, ':recycle: ')
    // 💩 Write bad code that needs to be improved.
    .replace(/^pp /, ':poop: ')
    // 📦 Update compiled files or packages.
    .replace(/^p /, ':package: ')
    // 🔧 Write configuration file.
    .replace(/^w /, ':wrench: ')
    // 🚚 Move file or directory.
    .replace(/^t /, ':truck: ')

  fs.writeFileSync(commitMessagePath, newCommitMessage)
}

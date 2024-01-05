import { release } from '@witejs/release-scripts'
import colors from 'picocolors'
import { logRecentCommits, run } from './releaseUtils'

release({
  repo: 'create-app-with',
  packages: ['create-app-with'],
  toTag: (_, version) => `v${version}`,
  logChangelog: () => logRecentCommits(),
  generateChangelog: async () => {
    console.log(colors.cyan('\nGenerating changelog...'))
    const changelogArgs = [
      'conventional-changelog',
      '-p',
      'angular',
      '-i',
      'CHANGELOG.md',
      '-s',
    ]
    await run('npx', changelogArgs)
  },
  getPkgDir: () => '.',
})

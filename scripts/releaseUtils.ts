import colors from 'picocolors'
import type { Options as ExecaOptions, ExecaReturnValue } from 'execa'
import { execa } from 'execa'

export async function run(
  bin: string,
  args: string[],
  opts: ExecaOptions<string> = {},
): Promise<ExecaReturnValue<string>> {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

export async function getLatestTag(): Promise<string> {
  const tags = (await run('git', ['tag'], { stdio: 'pipe' })).stdout
    .split(/\n/)
    .filter(Boolean)
  const prefix = 'v'
  return tags
    .filter((tag) => tag.startsWith(prefix))
    .sort()
    .reverse()[0]
}

export async function logRecentCommits(): Promise<void> {
  const tag = await getLatestTag()
  if (!tag) return
  const sha = await run('git', ['rev-list', '-n', '1', tag], {
    stdio: 'pipe',
  }).then((res) => res.stdout.trim())
  console.log(
    colors.bold(
      `\n${colors.blue(`i`)} Commits of ${colors.green(
        'create-app-with',
      )} since ${colors.green(tag)} ${colors.gray(`(${sha.slice(0, 5)})`)}`,
    ),
  )
  await run('git', ['--no-pager', 'log', `${sha}..HEAD`, '--oneline'], {
    stdio: 'inherit',
  })
  console.log()
}

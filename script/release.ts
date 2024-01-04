import { execSync } from "child_process";
import { release } from '@witejs/release-scripts'

release({
  repo: "create-app-with",
  packages: ["create-app-with"],
  toTag: (_, version) => `v${version}`,
  logChangelog: () =>
    console.log(
      execSync(
        "git log $(git describe --tags --abbrev=0)..HEAD --oneline",
      ).toString(),
    ),
  generateChangelog: () => {},
  getPkgDir: () => ".",
});

import { publish } from '@witejs/release-scripts'

publish({
  defaultPackage: 'create-app-with',
  getPkgDir: () => '.',
  provenance: true,
})

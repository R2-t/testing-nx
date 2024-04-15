import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run rex-raptor-react:serve',
        production: 'nx run rex-raptor-react:preview',
      },
      ciWebServerCommand: 'nx run rex-raptor-react:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});

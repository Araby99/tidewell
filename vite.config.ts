import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { liveLocaleVite } from 'livelocale/vite';

export default defineConfig({
  plugins: [
    react(),
    liveLocaleVite({
      share: true,
      // The repository is public, so the Send dialog may offer "Open on GitHub".
      exposeRepo: true,
      localesPath: './locales',
    }),
  ],
});

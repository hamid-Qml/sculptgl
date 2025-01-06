import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import glsl from 'vite-plugin-glsl';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    glsl(),
    checker({ typescript: { buildMode: true }, overlay: { initialIsOpen: false } }),
    tsconfigPaths(),
  ],
});

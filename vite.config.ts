import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import glsl from 'vite-plugin-glsl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), glsl()],
  resolve: {
    alias: {
      '@': '/src',
      '@lib': '/lib',
      assets: '/src/assets',
      components: '/src/components',
      drawables: '/src/drawables',
      editing: '/src/editing',
      files: '/src/files',
      gui: '/src/gui',
      math3d: '/src/math3d',
      mesh: '/src/mesh',
      misc: '/src/misc',
      render: '/src/render',
      states: '/src/states',
      worker: '/src/worker',
    },
  },
});




// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ["slick-carousel"]
//     }
//   }
// });
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// }),
// export default defineConfig({
//   plugins: [react()],
//   build: {  
//     rollupOptions: {
//       external: ['react', 'react-dom', 'react-redux']
//     }
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});



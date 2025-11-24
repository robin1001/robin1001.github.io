import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // 固定入口 JS 文件名
        entryFileNames: 'assets/[name].js',
        // 固定代码分割块文件名
        chunkFileNames: 'assets/[name].js',
        // 固定静态资源文件名（包括 CSS）
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name].css'
          }
          return 'assets/[name].[ext]'
        },
      },
    },
  },
})
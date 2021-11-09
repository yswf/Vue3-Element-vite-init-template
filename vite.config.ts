import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default (): UserConfigExport => {
  return {
    plugins: [
      vue()],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'https://api.wantofun.cn/api/private/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/assets/styles/var.scss";`
        }
      },
      postcss: {
        plugins: [require('autoprefixer'), require('tailwindcss'), require('postcss-import')]
      }
    },
    // 分割打包
    build: {
      sourcemap: false, // 开启 CSS source maps
      terserOptions: {
        compress: {
          // 生产环境时移除console
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        external: ['el-button', 'ElButton'],
        output: {
          // 分割打包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const path = id.toString().split('node_modules/')[1]
              const name = path.split('/')[0].toString()
              return name
            }
          }
        }
      },
      commonjsOptions: {
        requireReturnsDefault: 'namespace' // 要求ES模块返回其名称空间，但插件不添加标记，从而创建更高效的代码
      }

    }
  }
}

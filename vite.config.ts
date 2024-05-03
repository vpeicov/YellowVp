import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    // Вот здесь настройки для обработки маршрутов
    proxy: {
      '/api': {
        target: 'http://your-backend-server.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    // Важно, чтобы именно эта настройка перенаправляла все запросы к вашему index.html
    hmr: {
      host: 'localhost', // Следите за правильностью этой конфигурации
    },
  },
});

import { createSSRApp } from "vue";
import { createPinia } from 'pinia'; // 1. 导入 createPinia
import App from "./App.vue";

export function createApp() {
  // 使用 createSSRApp 创建应用实例（uni-app 推荐用于跨端渲染）
  const app = createSSRApp(App);
  
  // 2. 创建 Pinia 实例
  const pinia = createPinia();
  
  // 3. 将 Pinia 挂载到 Vue 应用上
  app.use(pinia);
  
  return {
    app,
  };
}
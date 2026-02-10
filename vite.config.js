import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // اجازه میده با آی‌پی به پروژه دسترسی داشته باشی
    port: 1282, // میتونی پورتی که میخوای مشخص کنی
  },
  build: {
    outDir: "build", // فولدر خروجی برای انتشار
  },
});

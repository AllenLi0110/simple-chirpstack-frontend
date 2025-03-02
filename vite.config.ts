import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ["vue"],
      dts: "src/typings/auto-imports.d.ts",
      resolvers: [NaiveUiResolver()],
    }),
    Components({
      dts: "src/typings/components.d.ts",
      resolvers: [NaiveUiResolver()],
    }),
    vue(),
  ],
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.ts"],
  },
});

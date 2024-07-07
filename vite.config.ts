import { defineConfig, loadEnv } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.warn("process.env", process.env);
  return defineConfig({
    define: {
      'process.env': {}
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [react()],
    build: {
      lib: {
        entry: "./src/index.tsx",
        name: "gnome-components",
        fileName: (format) => `gnome-components.${format}.js`,
      },
      target: "esnext",
    },
  });
};

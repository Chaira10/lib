// vite.config.js
import { defineConfig } from "file:///C:/Users/drmob/Desktop/lib/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/drmob/Desktop/lib/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.js",
      name: "lib"
    }
  },
  rollupOptions: {
    external: ["react", "react-dom"],
    output: {
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkcm1vYlxcXFxEZXNrdG9wXFxcXGxpYlxcXFxwYWNrYWdlc1xcXFxzZWxlY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGRybW9iXFxcXERlc2t0b3BcXFxcbGliXFxcXHBhY2thZ2VzXFxcXHNlbGVjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZHJtb2IvRGVza3RvcC9saWIvcGFja2FnZXMvc2VsZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiAnc3JjL21haW4uanMnLCBcbiAgICAgIG5hbWU6ICdsaWInXG4gICAgfVxuICB9LFxuICByb2xsdXBPcHRpb25zOiB7XG4gICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sIFxuICAgIG91dHB1dDoge1xuICAgICAgZ2xvYmFsczoge1xuICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThULFNBQVMsb0JBQW9CO0FBQzNWLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlO0FBQUEsSUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsSUFDL0IsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

// vite.config.ts
import { defineConfig } from "file:///Users/jermaineantwi/Projects/React-Mesh-Gradient/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "file:///Users/jermaineantwi/Projects/React-Mesh-Gradient/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///Users/jermaineantwi/Projects/React-Mesh-Gradient/node_modules/vite-plugin-dts/dist/index.mjs";
import postcss from "file:///Users/jermaineantwi/Projects/React-Mesh-Gradient/node_modules/rollup-plugin-postcss/dist/index.js";
import glsl from "file:///Users/jermaineantwi/Projects/React-Mesh-Gradient/node_modules/vite-plugin-glsl/src/index.js";
import alias from "file:///Users/jermaineantwi/Projects/React-Mesh-Gradient/node_modules/@rollup/plugin-alias/dist/es/index.js";
var __vite_injected_original_dirname = "/Users/jermaineantwi/Projects/React-Mesh-Gradient";
var vite_config_default = defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true }), glsl()],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/lib/index.ts"),
      name: "ReactMeshGradient",
      fileName: (format) => `react-mesh-gradient.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "THREE"],
      plugins: [
        postcss({
          extract: true,
          modules: true,
          plugins: []
        }),
        alias({
          entries: [
            { find: "THREE", replacement: "./src/three-exports.ts" }
          ]
        })
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamVybWFpbmVhbnR3aS9Qcm9qZWN0cy9SZWFjdC1NZXNoLUdyYWRpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamVybWFpbmVhbnR3aS9Qcm9qZWN0cy9SZWFjdC1NZXNoLUdyYWRpZW50L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9qZXJtYWluZWFudHdpL1Byb2plY3RzL1JlYWN0LU1lc2gtR3JhZGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgcG9zdGNzcyBmcm9tICdyb2xsdXAtcGx1Z2luLXBvc3Rjc3MnO1xuaW1wb3J0IGdsc2wgZnJvbSAndml0ZS1wbHVnaW4tZ2xzbCc7XG5pbXBvcnQgYWxpYXMgZnJvbSAnQHJvbGx1cC9wbHVnaW4tYWxpYXMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksIGR0cyh7IGluc2VydFR5cGVzRW50cnk6IHRydWUgfSksIGdsc2woKV0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbGliL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnUmVhY3RNZXNoR3JhZGllbnQnLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGByZWFjdC1tZXNoLWdyYWRpZW50LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAnVEhSRUUnXSxcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgcG9zdGNzcyh7XG4gICAgICAgICAgZXh0cmFjdDogdHJ1ZSxcbiAgICAgICAgICBtb2R1bGVzOiB0cnVlLFxuICAgICAgICAgIHBsdWdpbnM6IFtdXG4gICAgICAgIH0pLFxuICAgICAgICBhbGlhcyh7XG4gICAgICAgICAgZW50cmllczogW1xuICAgICAgICAgICAgeyBmaW5kOiAnVEhSRUUnLCByZXBsYWNlbWVudDogJy4vc3JjL3RocmVlLWV4cG9ydHMudHMnIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsb0JBQW9CO0FBQ2xXLFNBQVMsZUFBZTtBQUN4QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBTmxCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLGtCQUFrQixLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFBQSxFQUMxRCxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsa0JBQWtCO0FBQUEsTUFDNUMsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsdUJBQXVCO0FBQUEsSUFDL0M7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLGFBQWEsT0FBTztBQUFBLE1BQ3hDLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxVQUNOLFNBQVM7QUFBQSxVQUNULFNBQVM7QUFBQSxVQUNULFNBQVMsQ0FBQztBQUFBLFFBQ1osQ0FBQztBQUFBLFFBQ0QsTUFBTTtBQUFBLFVBQ0osU0FBUztBQUFBLFlBQ1AsRUFBRSxNQUFNLFNBQVMsYUFBYSx5QkFBeUI7QUFBQSxVQUN6RDtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

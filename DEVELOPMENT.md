# installations and configurations

pnpm create bolt-figma

## tailwind

pnpm install -D tailwindcss postcss autoprefixer

--- "@types/node": "^20.14.14", (delete)
--- pnpm i
--- pnpm i -D @types/node

pnpm tailwindcss init -p

=> tsconfig.json

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

=> vite.config.ts

```ts
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## shadcn

pnpm dlx shadcn-ui@latest init

note: pastikan menginstall di folder src
Where is your global CSS file? ... src/global.css

pnpm dlx shadcn-ui@latest add button

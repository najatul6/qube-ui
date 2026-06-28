import fs from "node:fs";
import path from "node:path";

const name = process.argv[2];

if (!name) {
  console.error("Usage: pnpm create:package <package-name>");
  process.exit(1);
}

const pascalCase = name
  .split("-")
  .map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  )
  .join("");

const packageDir = path.join("packages", name);

if (fs.existsSync(packageDir)) {
  console.error(`Package "${name}" already exists.`);
  process.exit(1);
}

fs.mkdirSync(
  path.join(packageDir, "src", name),
  { recursive: true },
);

fs.writeFileSync(
  path.join(packageDir, "package.json"),
  JSON.stringify(
    {
      name: `@qube-ui/${name}`,
      version: "0.1.0",
      private: true,
      type: "module",
      main: "./dist/index.cjs",
      module: "./dist/index.js",
      types: "./dist/index.d.ts",
      exports: {
        ".": {
          types: "./dist/index.d.ts",
          import: "./dist/index.js",
          require: "./dist/index.cjs",
        },
        "./styles.css": "./dist/index.css",
      },
      files: ["dist"],
      sideEffects: ["*.css"],
      scripts: {
        build: "tsup",
      },
      dependencies: {
        "@qube-ui/core": "workspace:*",
      },
      peerDependencies: {
        react: "^19.0.0",
        "react-dom": "^19.0.0",
      },
    },
    null,
    2,
  ),
);

fs.writeFileSync(
  path.join(packageDir, "tsconfig.json"),
  `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}
`,
);

fs.writeFileSync(
  path.join(packageDir, "tsup.config.ts"),
  `import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  external: ["react", "react-dom"],
});
`,
);

fs.writeFileSync(
  path.join(packageDir, "src", "index.ts"),
  `import "./${name}/styles.css";

export { ${pascalCase} } from "./${name}/${pascalCase}";
export type { ${pascalCase}Props } from "./${name}/${pascalCase}.types";
`,
);

fs.writeFileSync(
  path.join(
    packageDir,
    "src",
    name,
    `${pascalCase}.tsx`,
  ),
  `export function ${pascalCase}() {
  return <div>${pascalCase}</div>;
}
`,
);

fs.writeFileSync(
  path.join(
    packageDir,
    "src",
    name,
    `${pascalCase}.types.ts`,
  ),
  `export interface ${pascalCase}Props {}
`,
);

fs.writeFileSync(
  path.join(
    packageDir,
    "src",
    name,
    "styles.css",
  ),
  "",
);

console.log(
  `✅ Created @qube-ui/${name}`,
);
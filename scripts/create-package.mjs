import fs from "node:fs";
import path from "node:path";

const name = process.argv[2];

if (!name) {
  console.error("Usage: pnpm create:package <package-name>");
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(name)) {
  console.error(
    "❌ Package name must contain only lowercase letters, numbers, and hyphens.",
  );
  process.exit(1);
}

const pascalCase = name
  .split("-")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join("");

const packageDir = path.join("packages", name);

if (fs.existsSync(packageDir)) {
  console.error(`❌ Package "${name}" already exists.`);
  process.exit(1);
}

fs.mkdirSync(path.join(packageDir, "src", name), {
  recursive: true,
});

// package.json
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
  ) + "\n",
);

// tsconfig.json
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

// tsup.config.ts
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

// README.md
fs.writeFileSync(
  path.join(packageDir, "README.md"),
  `# @qube-ui/${name}

${pascalCase} component for Qube UI.
`,
);

// src/index.ts
fs.writeFileSync(
  path.join(packageDir, "src", "index.ts"),
  `import "./${name}/styles.css";

export { ${pascalCase} } from "./${name}/${pascalCase}";
export type { ${pascalCase}Props } from "./${name}/${pascalCase}.types";
`,
);

// Component
fs.writeFileSync(
  path.join(packageDir, "src", name, `${pascalCase}.tsx`),
  `import { forwardRef } from "react";
import { cn } from "@qube-ui/core";
import type { ${pascalCase}Props } from "./${pascalCase}.types";

export const ${pascalCase} = forwardRef<
  HTMLDivElement,
  ${pascalCase}Props
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "qube-${name}",
        className,
      )}
      {...props}
    />
  );
});

${pascalCase}.displayName = "${pascalCase}";
`,
);

// Types
fs.writeFileSync(
  path.join(packageDir, "src", name, `${pascalCase}.types.ts`),
  `import type { HTMLAttributes } from "react";

export interface ${pascalCase}Props
  extends HTMLAttributes<HTMLDivElement> {}
`,
);

// CSS
fs.writeFileSync(
  path.join(packageDir, "src", name, "styles.css"),
  `.qube-${name} {

}
`,
);

// Update playground package.json
const playgroundPackagePath = path.join(
  "apps",
  "playground",
  "package.json",
);

if (fs.existsSync(playgroundPackagePath)) {
  const playground = JSON.parse(
    fs.readFileSync(playgroundPackagePath, "utf8"),
  );

  playground.devDependencies ??= {};

  playground.devDependencies[`@qube-ui/${name}`] =
    "workspace:*";

  fs.writeFileSync(
    playgroundPackagePath,
    JSON.stringify(playground, null, 2) + "\n",
  );
}

console.log(`
✅ Successfully created @qube-ui/${name}

Next steps:

  pnpm install

  pnpm --filter @qube-ui/${name} build
`);
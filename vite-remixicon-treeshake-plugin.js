// TEMP: vite-barrel-treeshake-plugin.js
// Workaround for Rolldown (Vite 8) not fully tree-shaking barrel exports.
//
// Intercepts configured barrel import sources and replaces them with
// virtual modules that rewrite their export structure into a tree-shakeable form.
//
// This plugin does NOT analyze usage or selectively include exports.
// It only restructures modules so Vite's ESM tree-shaking can remove unused code.
//
// Requires per-library transformers to handle different export patterns.
// Remove once Rolldown provides reliable tree-shaking for barrel files.

import { readFileSync } from "fs";
import { resolve } from "path";

function barrelTreeshakePlugin(config = {}) {
  const VIRTUAL_PREFIX = "\0barrel-treeshake:";
  const packages = new Set(Object.keys(config));
  const cache = new Map();

  return {
    name: "vite-plugin-barrel-treeshake",
    enforce: "pre",

    resolveId(id) {
      if (packages.has(id)) return VIRTUAL_PREFIX + id;
    },

    load(id) {
      if (!id.startsWith(VIRTUAL_PREFIX)) return;

      const pkg = id.replace(VIRTUAL_PREFIX, "");
      if (cache.has(pkg)) return cache.get(pkg);

      const options = config[pkg];
      const source = readFileSync(resolve(options.entry), "utf8");
      const result = options.transform(source);

      if (typeof result !== "string")
        throw new Error(
          `[barrel-treeshake] transform for "${pkg}" must return a string`,
        );

      cache.set(pkg, result);
      return result;
    },
  };
}

function remixiconTransformer(src) {
  const exportBlock = src.match(/export\{([^}]+)\}/)?.[1];

  const nameMap = {};
  exportBlock.split(",").forEach((pair) => {
    const [local, exported] = pair.trim().split(" as ");
    nameMap[local.trim()] = (exported || local).trim();
  });

  const shortNames = Object.keys(nameMap)
    .map((n) => n.replace(/[$]/g, "\\$"))
    .join("|");

  const bigConst = src.match(/const [A-Za-z0-9$_]+=[\s\S]+?(?=export\{)/)?.[0];
  const regex = new RegExp(`(?=,(?:${shortNames})=)`);
  const blocks = {};

  for (const part of bigConst.split(regex)) {
    const m = part.match(/,?([A-Za-z0-9$_]+)=([\s\S]+)/);
    if (m) blocks[m[1]] = m[2].trimEnd();
  }

  const exports = Object.entries(nameMap)
    .map(([local, exported]) => {
      const body = blocks[local];
      if (!body) return "";
      return `const ${local}=${body}\nexport{${local} as ${exported}};`;
    })
    .filter(Boolean)
    .join("\n");

  return `import t from"react";\n${exports}`;
}

export default () =>
  barrelTreeshakePlugin({
    "@remixicon/react": {
      entry: "node_modules/@remixicon/react/index.mjs",
      transform: remixiconTransformer,
    },
  });

export { barrelTreeshakePlugin, remixiconTransformer };

import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "**/.eslintrc.js",
    "**/commitlint.config.js",
    "**/changelog.config.js",
    "**/.eslintrc.js",
    "**/logs",
    "**/*.log",
    "**/pids",
    "**/*.pid",
    "**/*.seed",
    "**/lib-cov",
    "**/coverage",
    "**/.grunt",
    "**/.lock-wscript",
    "build/Release",
    "**/.eslintcache",
    "**/node_modules",
    "**/.DS_Store",
    "**/dist",
    "**/.idea",
    "**/npm-debug.log.*",
    "**/__snapshots__",
    "**/package.json",
    "**/package-lock.json",
    "**/pnpm-lock.yaml",
    "**/.travis.yml",
    "**/dist",
    "**/build",
    "**/*.d.ts",
    "**/ci",
    "**/test",
    "**/jest.json",
    "**/changelog.config.js",
    "**/commitlint.config.js",
]), {
    extends: compat.extends("plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"),

    plugins: {
        "@typescript-eslint": typescriptEslintEslintPlugin,
        prettier,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            project: "tsconfig.json",
            tsconfigRootDir: "C:\\Users\\david\\OneDrive\\Documentos\\Codigo\\Fastify-template",
        },
    },

    rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
}]);
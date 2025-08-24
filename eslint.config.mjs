import prettier from "eslint-plugin-prettier";
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

export default [
    ...compat.extends("next/core-web-vitals", "prettier"),
    {
        plugins: {
            prettier,
        },

        languageOptions: {
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                project: "./tsconfig.json",
            },
        },

        rules: {
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",

            "react/jsx-filename-extension": [1, {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            }],
        },
    },
];
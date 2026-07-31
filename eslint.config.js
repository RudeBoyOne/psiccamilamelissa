import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "dist/**",
      "build/**",
      "coverage/**",
      "node_modules/**",
      "*.min.js"
    ]
  },

  // Regras base do ESLint para JS
  js.configs.recommended,

  // Regras recomendadas para TS (sem type-checking pesado por enquanto)
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // ✅ Regras que você pediu
      "prefer-const": "error",
      "no-console": "warn",

      // ✅ Qualidade e legibilidade
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-var": "error",
      "object-shorthand": ["error", "always"],
      "prefer-template": "error",
      "template-curly-spacing": ["error", "never"],
      "dot-notation": "error",

      // ✅ Ajuda a evitar bugs comuns
      "no-implicit-coercion": "error",
      "no-unreachable": "error",
      "no-alert": "warn",
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      "no-useless-return": "error",
      "no-nested-ternary": "warn",

      // ✅ Organização de código
      "consistent-return": "warn",
      "default-case-last": "error",
      "spaced-comment": ["error", "always", { "markers": ["/"] }],

      // ✅ Ajustes TS para convivência com JS durante migração
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "caughtErrorsIgnorePattern": "^_"
        }
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { "prefer": "type-imports" }
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-require-imports": "off"
    }
  }
];

// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  ignorePatterns: ["/dist/*"],
  plugins: ["import", "prettier"],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@assets", "./assets"],
          ["@fonts", "./assets/fonts"],
          ["@components", "./src/components"],
          ["@screens", "./src/screens"],
          ["@routes", "./src/routes"],
          ["@config", "./config"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"], // Add the extensions you're using
      },
    },
  },
  rules: { "prettier/prettier": "error" },
};

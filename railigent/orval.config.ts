import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./openapi.json",
    },
    output: {
      mode: "tags-split",
      target: "src/api/generated/index.ts",
      schemas: "src/api/generated/model",
      client: "vue-query",
      prettier: true,
      override: {
        mutator: {
          path: "src/api/mutator.ts",
          name: "customFetch",
        },
        useFetch: true
      },
    },
  },
});

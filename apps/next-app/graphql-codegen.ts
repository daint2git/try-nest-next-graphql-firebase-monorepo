import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/__generated__/graphql-types-and-hooks.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        reactApolloVersion: 3,
        withComponent: false,
        withHOC: false,
        withHooks: true,
        withMutationFn: false,
        withRefetchFn: false,
        withResultType: false,
        withMutationOptionsType: false,
        typesPrefix: "T",
        useTypeImports: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
  ignoreNoDocuments: true,
};

export default config;

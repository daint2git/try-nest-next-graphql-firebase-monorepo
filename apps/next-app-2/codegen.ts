import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.gql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/__generated__/graphql-types-and-hooks.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        {
          add: {
            placement: "prepend",
            content: [
              "// ------------------------------------------------------",
              "// THIS CODE WAS AUTOMATICALLY GENERATED",
              "// DO NOT EDIT THIS CODE BY HAND",
              '// YOU CAN REGENERATE IT USING "npm run gql:codegen"',
              "// -----------------------------------------------------",
            ],
          },
        },
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

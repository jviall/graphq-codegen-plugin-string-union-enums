import { CodegenPlugin } from "@graphql-codegen/plugin-helpers";

const Plugin: CodegenPlugin = {
  plugin() {
    return "Hello World!";
  },
};

export default Plugin;

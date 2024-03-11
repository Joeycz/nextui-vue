import {join, dirname} from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "./welcome.stories.mdx",
    "../../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../core/theme/stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {},
  },
  core: {
    disableTelemetry: true,
    builder: "@storybook/builder-vite",
  },
  typescript: {
    reactDocgen: false,
  },
  async viteFinal(config) {
    config.plugins = [
      ...config.plugins,
      require("@vitejs/plugin-vue-jsx")({
        exclude: [/node_modules/],
      }),
    ];
    return config;
  }
};
export default config;

/** @type { import('@storybook/vue3').Preview } */
// const preview = {
//   parameters: {
//     actions: {argTypesRegex: "^on[A-Z].*"},
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
import Vue, { ref } from "vue";
import React from "react";
import {themes} from "@storybook/theming";
// import {NextUIProvider} from "@nextui-org/system/src/provider";
import { Preview } from '@storybook/vue3';

import "./style.css";

const decorators: Preview["decorators"] = [
  (story, {globals: {locale}}) => {
    const direction =
      // @ts-ignore
      locale && new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "rtl" : undefined;

    // console.log('Story ===>', story, locale)
    return {
      components: { story },
      setup() {
        console.log('locale', locale, direction)
        return {
          locale,
          direction,
        }
      },
      template: `<div className="bg-dark" :lang="locale" :dir="direction"><story /></div>`,
    }
  },
]

const commonTheme = {
  brandTitle: "NextUI",
  brandUrl: "",
  brandTarget: "_self",
};

const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Foundations", "Components"],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: "dark",
    stylePreview: true,
    darkClass: "dark",
    lightClass: "light",
    classTarget: "html",
    dark: {
      ...themes.dark,
      ...commonTheme,
      appBg: "#161616",
      barBg: "black",
      background: "black",
      appContentBg: "black",
      appBorderRadius: 14,
      brandImage: "/dark-logo.svg",
    },
    light: {
      ...themes.light,
      ...commonTheme,
      appBorderRadius: 14,
      brandImage: "/light-logo.svg",
    },
  },
};

const locales = [
  "zh-CN",
];

const globalTypes: Preview["globalTypes"] = {
  locale: {
    toolbar: {
      icon: "globe",
      items: locales.map((locale) => ({
        value: locale,
        title: new Intl.DisplayNames(undefined, {type: "language"}).of(locale),
        // @ts-ignore
        right: new Intl.Locale(locale)?.textInfo?.direction === "rtl" ? "Right to Left" : undefined,
      })),
    },
  },
}

const preview: Preview = {
  decorators,
  parameters,
  globalTypes,
};

export default preview;

import Vue, { ref } from "vue";
import type { Meta } from "@storybook/vue3";
import {button} from "@nextui-vue/theme";

import { Button, ButtonProps } from "../src";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "light", "flat", "faded", "shadow", "ghost"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    spinnerPlacement: {
      control: {
        type: "select",
      },
      options: ["start", "end"],
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Button>;

const defaultProps = {
  spinnerPlacement: "start",
  ...button.defaultVariants,
  color: 'primary'
};

const StateTemplate = (args: ButtonProps) => {
  const isOpen = ref(false);

  const handlePress = () => {
    // eslint-disable-next-line no-console
    console.log("Pressed");
    isOpen.value = !isOpen.value;
  };

  return (
    <Button {...args} aria-label="Open" aria-pressed={isOpen.value} onClick={handlePress}>
      {isOpen.value ? "Close" : "Open"}
    </Button>
  );
};

export const Default = {
  render: (args: ButtonProps) => (
    <Button {...args}>
      Button
    </Button>
  ),
  args: {
    ...defaultProps,
  },
};

export const WithState = {
  render: StateTemplate,
  args: {
    ...defaultProps,
  },
};

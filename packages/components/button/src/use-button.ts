import { Ref, Component, SetupContext, computed } from 'vue';
import type {HTMLNextUIProps, PropGetter} from "@nextui-vue/system";
import {button} from "@nextui-vue/theme";
// import { defaultProps } from "@nextui-vue/system";
// import { extend } from '@nextui-vue/shared-utils'

interface Props extends HTMLNextUIProps<"button"> {
  ref?: Ref<HTMLButtonElement | null>;
  disabledRipple?: boolean;
  startContent?: Component;
  endContent?: Component;
  spinner?: Component;
  spinnerPlacement?: "start" | "end";
  isLoading?: boolean;
  onClick?: (e: MouseEvent) => void
};

export function useButton(props: UseButtonProps, context: SetupContext) {
  const groupContext = {};
  const isInGroup = !!groupContext;
  const {
    ref,
    as,
    className,
    fullWidth = false,
    size = "md",
    color = "default",
    variant = "solid",
    radius = groupContext?.radius,
    isDisabled = false,
    disableAnimation = false,
    isIconOnly = false
  } = props
  const Component = as || "button";

  const styles = computed(() => button({
    size,
    color,
    variant,
    radius,
    fullWidth,
    isDisabled,
    isInGroup,
    disableAnimation,
    isIconOnly,
    className,
  }))
  return {
    Component,
    children: context.slots.default?.(),
    styles
  }
}

export type UseButtonProps = Props;
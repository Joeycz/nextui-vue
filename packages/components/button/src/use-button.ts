import { Ref, Component, SetupContext, computed } from 'vue';
import type {HTMLNextUIProps, PropGetter} from "@nextui-vue/system";
import {button} from "@nextui-vue/theme";
// import { defaultProps } from "@nextui-vue/system";
// import { extend } from '@nextui-vue/shared-utils'

type buttonSize = 'sm' | 'md' | 'lg';
type buttonColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
type buttonVariant = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
type buttonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full';

interface Props extends HTMLNextUIProps<"button"> {
  ref?: Ref<HTMLButtonElement | null>;
  disabledRipple?: boolean;
  startContent?: Component;
  endContent?: Component;
  spinner?: Component;
  spinnerPlacement?: "start" | "end";
  isLoading?: boolean;
  fullWidth?: boolean;
  size?: buttonSize;
  color?: buttonColor;
  variant?: buttonVariant;
  radius?: buttonRadius;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  isIconOnly?: boolean;
  onClick?: (e: MouseEvent) => void
};

export function useButton(props: UseButtonProps, context: SetupContext) {
  const groupContext = {};
  const isInGroup = !!groupContext;
  const {
    as,
    fullWidth = false,
    size = "md",
    color = "default",
    variant = "solid",
    radius,
    isDisabled = false,
    disableAnimation = false,
    isIconOnly = false
  } = props
  type HTMLAttributes = /*unresolved*/ any
  const Component: string & HTMLAttributes = as || "button";

  const styles = computed(() => button({
    size,
    color,
    variant,
    radius,
    fullWidth,
    isDisabled,
    isInGroup,
    disableAnimation,
    isIconOnly
  }))
  return {
    Component,
    children: context.slots.default?.(),
    styles
  }
}

export type UseButtonProps = Props;
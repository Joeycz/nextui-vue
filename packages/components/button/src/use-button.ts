import { Ref, VNode, Component } from 'vue';
import type {HTMLNextUIProps, PropGetter} from "@nextui-vue/system";
import { extend } from '@nextui-vue/shared-utils'
// interface Props extends HTMLNextUIProps<"button"> {
//   ref?: Ref<HTMLButtonElement | null>;
//   disabledRipple?: boolean;
//   startContent?: Component;
//   endContent?: Component;
//   spinner?: Component;
// };
export const buttonProps = extend({}, {
  
})

export function useButton(props: UseButtonProps) {
  const {
    as
  } = props
  const Component = as || "button";
  return {
    Component
  }
}

export type UseButtonProps = Props;
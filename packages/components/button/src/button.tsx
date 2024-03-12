import { defineComponent, ref, DefineComponent, VNode } from "vue";
import {UseButtonProps, useButton} from "./use-button";

export interface ButtonProps extends UseButtonProps {}

const Button = defineComponent({
  props: {
    disabledRipple: Boolean,
    startContent: Object,
    endContent: Object,
    spinner: Object,
  },
  setup(props) {
    console.log('props', props.as)
    const {
      Component
    } = useButton(props);
    return () => (
      <Component>
        来来来
      </Component>
    )
  },
})

Button.displayName = "NextUIVue.Button";

export default Button;
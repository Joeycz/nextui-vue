import { defineComponent, ref, DefineComponent, VNode, SetupContext } from "vue";
import {UseButtonProps, useButton} from "./use-button";

export interface ButtonProps extends UseButtonProps {}

// const Button = defineComponent({
//   props: {
//     disabledRipple: Boolean,
//     startContent: Object,
//     endContent: Object,
//     spinner: Object,
//   },
//   setup(props) {
//     console.log('props', props.as)
//     const {
//       Component
//     } = useButton(props);
//     return () => (
//       <Component>
//         来来来
//       </Component>
//     )
//   },
// })
const Button = (props: ButtonProps, context: SetupContext) => {
  console.log('props', props)
  const {
    Component,
    children,
    styles,
  } = useButton(props, context);
  return (
    <Component className={styles.value}>
      {children}
    </Component>
  )
}

Button.displayName = "NextUIVue.Button";

export default Button;
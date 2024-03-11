import { defineComponent } from "vue";
import {UseButtonProps} from "./use-button";

export interface ButtonProps extends UseButtonProps {}

const Button = defineComponent({
  setup() {
    return {}
  },
  render() {
    return <div>button up</div>
  }
})

export default Button;
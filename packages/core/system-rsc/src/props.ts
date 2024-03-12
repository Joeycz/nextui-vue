import {
  extend,
  makeStringProp
} from '@nextui-vue/shared-utils';

export const defaultProps = extend({}, {
  as: makeStringProp<keyof HTMLElementTagNameMap>('div')
})

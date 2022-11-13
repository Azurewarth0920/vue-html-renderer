import { h } from 'vue'
import { parser } from './parser'

export const component = (props: { value: string }) => {
  console.log(parser(props.value))
  return h('div', parser(props.value))
}

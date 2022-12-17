import {
  parse,
  walkSync,
  ELEMENT_NODE,
  TEXT_NODE,
  Node,
  COMMENT_NODE,
  DOCUMENT_NODE,
} from 'ultrahtml'
import { h, VNode, createCommentVNode } from 'vue'

const traverseNode = (node: Node): string | VNode => {
  if (node.type === DOCUMENT_NODE) {
    return node.children.map(traverseNode)
  }

  if (node.type === ELEMENT_NODE) {
    return h(node.name, node.attributes, node.children.map(traverseNode))
  }

  if (node.type === TEXT_NODE) {
    return node.value
  }

  if (node.type === COMMENT_NODE) {
    return createCommentVNode(node.value)
  }

  return ''
}

export const parser = (html: string) => {
  const ast = parse(html)
  const slots: (VNode | string)[] = []
  walkSync(ast, node => {
    // Drop node if it has parent.
    // Because handling is done in parent node.
    if (node.parent) return
    const slot = traverseNode(node)
    slots.push(slot)
  })

  return slots
}

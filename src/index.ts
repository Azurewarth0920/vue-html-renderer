import { Plugin } from 'vue'
import { component } from './lib/component'

export const plugin: Plugin = {
  install(app) {
    app.component('HtmlRender', component)
  },
}

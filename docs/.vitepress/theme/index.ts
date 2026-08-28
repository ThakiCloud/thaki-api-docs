import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ScalarSpec from './components/ScalarSpec.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ScalarSpec', ScalarSpec)
  },
} satisfies Theme

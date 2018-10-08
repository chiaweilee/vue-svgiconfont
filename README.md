## Vue-SvgIconfont

<a href="https://npmcharts.com/compare/vue-svgiconfont?minimal=true"><img src="https://img.shields.io/npm/dm/vue-svgiconfont.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vue-svgiconfont"><img src="https://img.shields.io/npm/v/vue-svgiconfont.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-svgiconfont"><img src="https://img.shields.io/npm/l/vue-svgiconfont.svg" alt="License"></a>

---

### Install

```
npm install vue-svgiconfont
```

### Manage and download your Icons.

Iconfont http://iconfont.cn/

### Usage
```vuejs
import Vue from 'vue'

// iconfont assets file downloaded from iconfont.cn project
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'

import 'vue-svgiconfont/svgiconfont.css'
import vueSvgIconfont from 'vue-svgiconfont'
Vue.use(vueSvgIconfont, {
  tagName: 'svg-iconfont', // default for <svg-iconfont />
  className: 'fafont',
  prefix: 'fa' // find prefix in your Iconfont project. Default: 'icon'
})
```

```vue
<svg-iconfont name="vue" />
```

### Props

- spin

```vue
<svg-iconfont name="vue" spin />
```

The 'spin' and others below use CSS to work, so you should import 'svgiconfont.css' first.
Or you can write it your self, like this:

```css
 svg.spin[data-v-svgiconfont] {
      animation: fa-spin 1s 0s infinite linear;
 }
 @keyframes fa-spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
```

- pulse
- flip-vertical
- flip-horizontal

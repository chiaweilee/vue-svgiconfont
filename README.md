## Vue-SvgIconfont
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

<!--import svg file you downloaded from your Iconfont project-->
import './assets/iconfont.svg'
<!--import css file for svg, or write css yourself-->
import 'vue-svgiconfont/svgiconfont.css'
import vueSvgIconfont from 'vue-svgiconfont'
Vue.use(vueSvgIconfont, {
  tagName: 'svg-iconfont', // default for <svg-iconfont />
  className: 'fafont',
  prefix: 'fa' // find prefix in your Iconfont project. Default: 'icon'
})
```

```vue
<svg-iconfont />
```

### Props

- spin

```vue
<svg-iconfont spin />
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

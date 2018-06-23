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

- pulse
- flip-vertical
- flip-horizontal

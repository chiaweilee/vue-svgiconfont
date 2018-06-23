const install = function (Vue, options) {
  Vue.component(options.tagName || 'svg-iconfont', {
    render: function (createElement) {
      const className = options.className || 'iconfont'
      const prefix = options.prefix || 'icon'
      const classes = [className]
      if (this.spin) classes.push('spin')
      if (this.pulse) classes.push('pulse')
      if (this.flipVertical) classes.push('flip-vertical')
      if (this.flipHorizontal) classes.push('flip-horizontal')
      return createElement(
        'svg', {
          attrs: {
            'aria-hidden': true,
            'data-v-svgiconfont': '',
            'class': classes.join(' ')
          }
        }, [createElement('use', {
          attrs: {
            'xlink:href': '#' + prefix + '-' + this.name
          }
        })]
      )
    },
    props: {
      name: {
        type: String,
        required: true
      },
      spin: {
        type: Boolean,
        default: false
      },
      pulse: {
        type: Boolean,
        default: false
      },
      flipVertical: {
        type: Boolean,
        default: false
      },
      flipHorizontal: {
        type: Boolean,
        default: false
      }
    }
  })
}

export default {
  install
}

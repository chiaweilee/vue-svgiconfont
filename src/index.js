const install = function (Vue, options) {
  const { tagName, className, prefix } = options || {}
  Vue.component(tagName || 'svg-iconfont', {
    functional: true,
    render: function (createElement, { props }) {
      const classes = [className || 'iconfont']
      if (props.spin) classes.push('spin')
      if (props.pulse) classes.push('pulse')
      if (props.flipVertical) classes.push('flip-vertical')
      if (props.flipHorizontal) classes.push('flip-horizontal')
      return createElement(
        'svg', {
          attrs: {
            'aria-hidden': true,
            'data-v-svgiconfont': '',
            'class': classes.join(' ')
          }
        }, [createElement('use', {
          attrs: {
            'xlink:href': '#' + (prefix || 'icon') + '-' + props.name
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

<template>
  <svg v-bind="allAttrs">
    <path :d="d"></path>
  </svg>
</template>

<script>
  const PATH_REGEX = /<path d="(.+)" \/>/;
  const BASE64_PREFIX = 'data:image/svg+xml;base64,';

  export default {
    name: 'mdi',
    props: {
      mdi: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        required: false,
        default: 24,
      },
    },
    computed: {
      d() {
        let svg = this.mdi;

        // Decode base64
        if (svg.indexOf(BASE64_PREFIX) === 0) {
          svg = atob(svg.substr(BASE64_PREFIX.length));
        }

        const result = PATH_REGEX.exec(svg);
        if (result === null) {
          console.warn('[Mdi.vue] Could not decode specified icon, please ensure it\'s been properly imported');
          return null;
        }

        return result[1];
      },
      allAttrs() {
        return Object.assign(
          {},
          {
            viewBox: '0 0 24 24',
            xmlns: 'http://www.w3.org/2000/svg',
            width: this.size,
            height: this.size,
            role: 'presentation',
            class: this.className,
          },
        );
      }
    }
  };
</script>

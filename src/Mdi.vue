<template>
    <svg v-bind="allAttrs">
        <path :d="d"></path>
    </svg>
</template>

<script>
    const PATH_REGEX = /<path d="(.+)" \/>/;

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
                return PATH_REGEX.exec(this.mdi)[1];
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

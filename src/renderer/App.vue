<template>
    <div id="app">
        <link rel="stylesheet" href="../../node_modules/element-theme-default/lib/index.css">
        <div>{{caption}}</div>
        <router-view></router-view>
    </div>
</template>

<script>
    import console from 'console'

    export default {
        name: 'helper-11',
        data() {
            return {
                caption: "",
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                try {
                    let self = this;
                    this.$store.getCurrentUser([]).then((res) => {
                        console.log("Получен результат", res);
                        self.caption = res;
                    }).catch((e) => {
                        console.log("Получена ошибка", e)
                    })
                } catch (e) {
                    console.log("Получена ошибка на этапе запуска", e)
                }

            }
        }
    }
</script>

<style>
    /* CSS */
</style>

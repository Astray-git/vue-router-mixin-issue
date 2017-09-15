<template>
  <div>Foo</div>
</template>

<script>
const mixin = {
    beforeRouteEnter(to, from, next) {
        console.log('mixin beforeRouteEnter')
        next(() => console.log('mixin beforeRouteEnter next'))
    },
    created() {
        console.log('mixin created');
    }
}

export default {
    mixins: [mixin],
    beforeRouteEnter(to, from, next) {
        console.log('component beforeRouteEnter')
        next(() => console.log('component beforeRouteEnter next'))
    },
    created() {
        console.log('component created');
    }
}
</script>

<style>

</style>

<template>
  <div v-if="msg">
    {{ msg }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('message', ['msg'])
    }
}
</script>

<style>

</style>

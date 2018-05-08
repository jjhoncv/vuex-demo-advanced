<template>
  <div v-if="msg" class="message">
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
.message {
  position: absolute;
  border: 1px solid #ddd;
  padding: 5px 20px;
  left: 0;
  right: 0;
}
</style>

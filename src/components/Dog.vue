<template>
  <div class="dog">
    <h3>{{ dog.name }} </h3>
    <p>Ein lieber Hund</p>
  </div>
</template>

<script>
export default {
  props: ['dog'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

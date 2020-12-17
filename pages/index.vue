<template>
  <div class="container"></div>
</template>

<script>
export default {
  mounted() {
    // make an axios call to our 'adHoc' server first
    this.$store.dispatch('http/send', {
      uri: 'token',
      data: {
        username: 'cali',
        id: 12391823,
      },
      env: 'adHoc',
    })

    // and then make an axios call like usual
    this.$store.dispatch('http/send', {
      uri: 'other-stuff',
      data: {
        string: 'cool',
      },
    })
  },
}
</script>

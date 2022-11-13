<template>
  <div>
    <html-render :value="htmlString" />
    <h1 onclick="window.alert(111)">hi</h1>
  </div>
</template>

<script setup lang="ts">
const htmlString = `
  <div><h1 data-avbbad onclick="console.log(this)" class="h1">Hello world</h1>    <!-- <h2>sample</h2> --></div>
`
</script>

<script lang="ts" setup>
const str = '123'
const num = 123
const bool = false
console.log(str, num, bool)
enum test {
  a = 1,
  b = 2,
}
// 这是一个注释
const fun = () => {
  const reg = /123/
  console.log(reg)
}
fun()
</script>

<template>
  <div>
    test
  </div>
</template>

<style>
.test{
  color: red;
}
</style>

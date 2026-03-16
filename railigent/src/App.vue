<template>
  <div id="app">
    <ix-basic-navigation>
      <div slot="logo">Railigent</div>
      <ix-menu>
        <ix-menu-item home icon="home" @click="$router.push('/')">Dashboard</ix-menu-item>
        <ix-menu-item icon="agent" @click="$router.push('/agents')">Agents</ix-menu-item>
        <ix-menu-item icon="board" @click="$router.push('/boards')">Boards</ix-menu-item>
      </ix-menu>
      <router-view></router-view>
    </ix-basic-navigation>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
#app {
  height: 100vh;
}
</style>

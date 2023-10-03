

<script setup lang="ts">
import { useTodolists } from '@/stores/todolists';

const todolistsModel = useTodolists();
let todolists = todolistsModel.$state.todolists;

</script>


<template>
  <main>
    <h1>Done</h1>
    <ul>
      <li v-for="todolist, k in todolists" :key="k">
        bite
        <router-link :to="{ name: 'todolist', params: { id: todolist.id } }">
          {{ todolist.name }}
        </router-link>
      </li>
      
    </ul>
  </main>
</template>

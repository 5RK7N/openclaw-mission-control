<template>
  <div class="p-4">
    <h1 class="text-h1">Boards</h1>
    <ix-layout-grid>
      <ix-row>
        <ix-col v-for="board in boards" :key="board.id" size="4">
          <ix-card>
            <div class="p-2">
              <h2 class="text-h2">{{ board.name }}</h2>
              <p>{{ board.status }}</p>
              <p>Organization: {{ board.organization_id }}</p>
            </div>
          </ix-card>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  </div>
</template>

<script setup lang="ts">
import { useListBoardsApiV1BoardsGet } from '../api/generated/boards/boards';
import { computed } from 'vue';

const { data: boardsData } = useListBoardsApiV1BoardsGet() as any;

const boards = computed(() => {
  const data = boardsData?.value;
  if (data && 'data' in data) {
    return (data.data as any).items || [];
  }
  return [];
});
</script>

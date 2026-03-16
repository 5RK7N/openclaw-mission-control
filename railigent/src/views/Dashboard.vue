<template>
  <div class="p-4">
    <h1 class="text-h1">Dashboard</h1>
    <div class="row">
      <div class="col-3">
        <ix-card>
          <div class="p-2">
            <h2 class="text-h2">Online Agents</h2>
            <p>{{ agentsCount }}</p>
          </div>
        </ix-card>
      </div>
      <div class="col-3">
        <ix-card>
          <div class="p-2">
            <h2 class="text-h2">Total Boards</h2>
            <p>{{ boardsCount }}</p>
          </div>
        </ix-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useListAgentsApiV1AgentsGet } from '../api/generated/agents/agents';
import { useListBoardsApiV1BoardsGet } from '../api/generated/boards/boards';
import { computed } from 'vue';

const { data: agentsData } = useListAgentsApiV1AgentsGet() as any;
const { data: boardsData } = useListBoardsApiV1BoardsGet() as any;

const agentsCount = computed(() => {
  const data = agentsData?.value;
  if (data && 'data' in data) {
     return String((data.data as any).total || 0);
  }
  return '0';
});

const boardsCount = computed(() => {
  const data = boardsData?.value;
  if (data && 'data' in data) {
     return String((data.data as any).total || 0);
  }
  return '0';
});
</script>

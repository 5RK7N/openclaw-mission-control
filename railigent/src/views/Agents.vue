<template>
  <div class="p-4">
    <h1 class="text-h1">Agents</h1>
    <ix-layout-grid>
      <ix-row>
        <ix-col v-for="agent in agents" :key="agent.id" size="4">
          <ix-card>
            <div class="p-2">
              <h2 class="text-h2">{{ agent.name }}</h2>
              <p>{{ agent.status }}</p>
              <p>{{ agent.description }}</p>
            </div>
          </ix-card>
        </ix-col>
      </ix-row>
    </ix-layout-grid>
  </div>
</template>

<script setup lang="ts">
import { useListAgentsApiV1AgentsGet } from '../api/generated/agents/agents';
import { computed } from 'vue';

const { data: agentsData } = useListAgentsApiV1AgentsGet() as any;

const agents = computed(() => {
  const data = agentsData?.value;
  if (data && 'data' in data) {
    return (data.data as any).items || [];
  }
  return [];
});
</script>

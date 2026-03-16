import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import { createApp } from 'vue';
import { ixPlugin } from '@siemens/ix-vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(ixPlugin);
app.use(VueQueryPlugin);
app.use(router);

app.mount('#app');

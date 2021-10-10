import { $store } from './store/store';
import { startBot } from './test';

startBot();

console.debug($store.dialog);
console.debug($store.dialog.reducers.reducer1);
console.debug($store.dialog.actions.action2);

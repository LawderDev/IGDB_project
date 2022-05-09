import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import './index.css'
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookmark, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faBookmark, faHeart, faXmark);

const app = createApp(App)
app.use(store)
app.use(router);

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import './index.css'
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBookmark, faHeart, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faXmark, faTriangleExclamation} from "@fortawesome/free-solid-svg-icons";

library.add(faBookmark, faHeart, faPenToSquare, faTriangleExclamation, faXmark);

const app = createApp(App)
app.use(store)
app.use(router);

app.mount('#app')

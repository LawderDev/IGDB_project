import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import './index.css'
import router from './router';
import cors from "cors"
/*
const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}*/

const app = createApp(App)
//app.use(cors(corsOptions))
app.use(store)
app.use(router);

app.mount('#app')

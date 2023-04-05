import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import  * as  Icons from '@ant-design/icons-vue';
import axios from 'axios';

axios.defaults.baseURL=process.env.VUE_APP_SERVER;

axios.interceptors.request.use(function(config){
    console.log('parameter: ',config);
    return config;
},error =>{
    console.log('error', error);
    return Promise.reject(error);
})

axios.interceptors.response.use(function(response){
    console.log('result: ', response);
    return response;
},error=>{
    console.log('error', error);
    return Promise.reject(error);
});

const app = createApp(App);

app.use(store).use(router).use(Antd).mount('#app');



// import all icons 
const icons:any = Icons;

for(const i in icons){
    app.component(i,icons[i]);
}



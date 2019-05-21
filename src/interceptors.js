import axios from "axios";
import router from "./router";
import store from "./store"


export default function (app) {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = "Bearer " + token;
    // return config.headers["set-cookie"] = "Bearer " + token;

    return config
  })
  axios.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
      // 传入vue实例，
      // 清空
      // if (app.inst) {
      // app.inst.$store.dispatch("logout")
      // 跳转
      // app.inst.$router.push({
      //   path: "/login",
      //   query: {
      //     redirect: app.inst.$route.fullPath
      //   }
      // })

      // }
      // 
      store.dispatch("logout");
      router.push({
        path: "/login",
        query: {
          redirect: app.inst.$route.fullPath
        }
      })

    }
    return Promise.reject(error);
  })
}
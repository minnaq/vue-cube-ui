import axios from "axios";


export default function (app) {
  axios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.token = token
    return config
  })
  axios.interceptors.response.use(null, error => {
    if (error.response.status === 401) {
      // 清空
      if (app.inst) {
        app.inst.$store.dispatch("logout")
        // 跳转
        app.inst.$router.push({
          path: "/login",
          query: {
            redirect: app.inst.$route.fullPath
          }
        })
      }

    }
    return Promise.reject(error);
  })
}
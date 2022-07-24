import axios from "axios";

export function request(config) {
  // 1...创建axios实例
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000
  });

  // 2....axios的拦截器
  // axios.interceptors   拦截全局的
  //(1)request 拦截请求
  instance.interceptors.request.use(
    config => {
    //   console.log(config);
    //   比如 1.config中的信息不符合服务器的要求
    //        2.每次发送网络请求时，都希望界面中显示一个请求图标
    //        3.某些网络请求(比如登录token)必须携带一些特殊信息
      //拦截器会拦截 config信息，必须要返回出去
      return config;
    },
    err => {
    //   console.log(err);
    }
  );
  //(2)response 拦截响应
  instance.interceptors.response.use(result=>{
    // console.log(result);
    return result.data
    // result.data 才是真正的结果
  },error=>{
    // console.log(error);
  });

  //3....发送真正的网络请求
  //instance(config) 它返回的就是promise
  return instance(config);
}

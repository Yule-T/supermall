import { request } from "./request";

//函数调用->压入函数栈(保存调用时所有变量)
//调用结束后->弹出函数栈(释放函数所有变量)  会被回收掉
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}

// export function getHomeMultidata(){
//     return request({
//         url:'/home/multidata'
//     })
// }
// export function getHomeMultidata(){
//     return request({
//         url:'/home/multidata'
//     })
// }
// export function getHomeMultidata(){
//     return request({
//         url:'/home/multidata'
//     })
// }
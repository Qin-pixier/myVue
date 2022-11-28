import service from "../service";
import qs from 'qs'
export function login(data){
    return service({
        method:'post',
        url:'/login',
        data
    })
}

//学生列表
export function students(params){
    return service({
        method:'get',
        url:'/students',
        params
    })
}

// 学生列表删除接口
export function studentDel(id){
    return service({
        method:'delete',
        url:`/students/${id}`,
    })
}


// 信息列表新增接口

export function info(type,data){
    data = qs.stringify(data)
    let obj = {method:type,url:'/info',
    data}
    return service (obj)
}
// 信息列表修改接口

// export function updateInfo(data){
//     data = qs.stringify(data)
//     return service ({
//         method : 'put',
//         url:'/info',
//         data
//     })
// }
export function getInfo(){
    return service ({
        method : 'get',
        url:'/info',
       
    })
}

//信息列表删除接口
export function infoDel(id){
    return service({
        method:'delete',
        url :`/info/${id}`
    })
}

export function dataview(){
    return service({
        method:'get',
        url:'/dataview'
    })
}
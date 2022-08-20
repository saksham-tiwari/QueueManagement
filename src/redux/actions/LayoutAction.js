import LayoutService from "../../services/Layout.service";

export const getNearby = (latti,long)=>(dispatch)=>{
    return LayoutService.getNearby(latti,long)
    .then((res)=>{
        console.log(res);
        dispatch({
            type:"Get_Nearby",
            payload:res.data
        })
        return Promise.resolve();
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}
// export const getNearby = (data)=>{
//     console.log(data);
//     return{
//         type:"Get_Nearby",
//         payload:data
//     }
// }
export const addStoreDetails = (name,counter,Address,ShopCounter,countertime,avgtime,latti,long)=>(dispatch)=>{
    return LayoutService.addStoreDetails(name,counter,Address,ShopCounter,countertime,avgtime,latti,long)
    .then(res=>{
        console.log(res);
        dispatch({
            type:"addDetails",
            payload:{name,counter,Address,ShopCounter,countertime,avgtime,latti,long}
        })
        return Promise.resolve();
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}


export const getSingle = (id)=>(dispatch)=>{
    return LayoutService.getSingle(id)
    .then((res)=>{
        console.log(res);
        dispatch({
            type:"Set_Single",
            payload:res.data
        })
        return Promise.resolve(res);
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}

export const joinQueue = (shopid)=>(dispatch)=>{
    return LayoutService.joinQueue(shopid)
    .then((res)=>{
        console.log(res);
        return Promise.resolve();
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}
export const allQueues = ()=>(dispatch)=>{
    return LayoutService.allQueues()
    .then((res)=>{
        console.log(res);
        dispatch({
            type:"GetAllQueues",
            payload:res.data
        })
        return Promise.resolve(res.data);
    })
    .catch((err)=>{
        console.log(err);
        return Promise.reject();
    })
}

export const checkStore = ()=>dispatch=>{
    return LayoutService.checkStore()
    .then((res)=>{
        return Promise.resolve(res)
    })
    .catch((err)=>{
        return Promise.reject(err)
    })
}
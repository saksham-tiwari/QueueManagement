import LayoutService from "../../services/Layout.service";

export const setLoader = ()=>(dispatch)=>{
    dispatch({
        type:"Set_Loading"
    })
}
 
export const UnsetLoader = ()=>(dispatch)=>{
    dispatch({
        type:"Unset_Loading"
    })
}
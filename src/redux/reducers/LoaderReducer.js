
const initialState = [false]

const LoaderReducer = (state = initialState, action)=>{
    const {type, payload} = action;
     switch(type){
         case "Set_Loading":
            //  let tempGrp = state.groups;
            console.log("here");
             return [true]

        case "Unset_Loading":
            return [false]
        default:
             return state;
     }
}

export default LoaderReducer

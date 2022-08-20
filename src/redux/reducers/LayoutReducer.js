
const initialState = {nearby:[{dist:0,shop:{_id:0,name:"",Address:"",counter:0,ShopCounter:[],avgtime:[],queue:[],latti:0,long:0}}],store:{_id:0,name:"",Address:"",counter:0,ShopCounter:[],avgtime:[],queue:[],latti:0,long:0},single:{_id:0,name:"",Address:"",counter:0,ShopCounter:[],avgtime:[],queue:[],latti:0,long:0},allQueues:[{_id:"0",timeleft:"0"}]};

const LayoutReducer = (state = initialState, action)=>{
    const {type, payload} = action;
     switch(type){
         case "Get_Nearby":
            //  let tempGrp = state.groups;
             return{
                 ...state,
                nearby: payload
             };

        case "addDetails":
            return{
                ...state,
                store: payload
            }
        case "Set_Single":
            return{
                ...state,
                single: payload
            }
        case "GetAllQueues":
            return{
                ...state,
                allQueues: payload
            }
        default:
             return state;
     }
}

export default LayoutReducer

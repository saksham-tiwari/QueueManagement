import axios from "axios";
import Url from './BaseUrl';
import authHeader from "./auth-header";


class LayoutService{
    async getNearby(latti,long){
        return await axios
        .post(Url+"store/nearby",{
            latti,long
        });
    }
    async addStoreDetails(name,counter,Address,ShopCounter,countertime,avgtime,latti,long){
        let userId = localStorage.getItem("userid")
        return await axios
        .post(Url+"store/makestore/"+userId,{
            name,counter,Address,ShopCounter,countertime,avgtime,latti,long
        })
    }
    async getSingle(id){
        return await axios
        .get(Url+"store/details/"+id);
    }
    async joinQueue(shopid){
        // let username = localStorage.getItem("email")
        let userId = localStorage.getItem("userid")
        var today = new Date();
        var time = parseInt(parseInt(today.getHours())*60 + parseInt(today.getMinutes()));
        return await axios
        .post(Url+"store/adduser",{
            shopid,
            userid:userId,
            time
        });
    }
    async leaveQueueStore(shopid,counter){
        // let username = localStorage.getItem("email")
        // let userId = localStorage.getItem("userid")
        var today = new Date();
        var time = parseInt(parseInt(today.getHours())*60 + parseInt(today.getMinutes()));
        return await axios
        .post(Url+"store/removeuser",{
            shopid,
            counter,
            time
        });
    }
    async allQueues(){
        let userId = localStorage.getItem("userid")
        return await axios
        .post(Url+"store/joinedqueue",{userid:userId});
    } 

    async checkStore(){
        let userid = localStorage.getItem("userid")
        console.log(typeof userid, userid);
        return await axios
        .post(Url+"store/checkstore",{userid});
    }

    

}
export default new LayoutService();
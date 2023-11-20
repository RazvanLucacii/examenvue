import Global from "./../Global";
import axios from "axios";
import ServiceToken from './servicetoken';
const service = new ServiceToken();

export default class ServiceLogin {

    data(){
        return{
            email: "",
            password: "",
        }
    }

    login(){
        return new Promise(function(resolve){
            var request = "api/manage/login";
            var url = Global.apiUrls + request;
            axios.post(url, {
                email: "",
                password: ""
            }).then(response =>{
                response(resolve);
                console.log(resolve);
            })
        })
    }

    setToken(token){
        service.token = token;
    }
}
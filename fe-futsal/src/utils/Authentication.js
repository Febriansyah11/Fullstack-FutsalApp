import jwt from 'jsonwebtoken'
import {Redirect} from "react-router";
import React from "react";

export default class Authentication{
    isLogin(){
        const token = localStorage.getItem('userInfo')
        return !!token & !this.isTokenExpired(token)
    }

    isTokenExpired(token) {
        try {
            const decoded = jwt.decode(token)
            if(decoded.exp < Date.now() / 1000){
                return true
            }else {
                return false
            }
        }catch (error) {
            console.log('Error, Auth', error)
        }
        return false;
    }

    isPermission(){
        if (this.isLogin()){
            const dataToken = jwt.decode(localStorage.getItem('userInfo'))
            if(!(dataToken === null)){

            }else {
                localStorage.clear();
                return <Redirect to="/login"/>
            }if (!(dataToken.sub === 3)){
                return <Redirect to="/user"/>
            }
        }
    }
}
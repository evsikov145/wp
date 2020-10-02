import Router from "next/router";
import {useEffect} from 'react'

export default function Logout(){

    useEffect(() => {
        const res = getCookie('wp');
        if(res !== 'token125438797435345234235235657___2342'){
            Router.push('/');
        }
    })

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    return null;

}
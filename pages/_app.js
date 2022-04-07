import '../styles/globals.css'
import {useEffect, useState} from "react";
import {Button, Fabric, Navigation, NavigationGroup} from "@f-ui/core";
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import NavigationTemplate from "../ext/NavigationTemplate";

function MyApp({Component, pageProps}) {


    return (
        <NavigationTemplate
            pages={[{label: 'Início', path: '/',}]}
        >
            <Component {...pageProps}/>
        </NavigationTemplate>
    )
}

export default MyApp

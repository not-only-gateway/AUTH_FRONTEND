import React, {useState} from 'react'
import {Tab, VerticalTabs} from "@f-ui/core";
import styles from '../styles/Home.module.css'
import ADList from "../components/lists/ADList";

import PrivilegeList from "../components/lists/PrivilegeList";

import EndpointList from "../components/lists/EndpointList";
import UserList from "../components/lists/UserList";
import {useRouter} from "next/router";


export default function Home() {
    const [open, setOpen] = useState(0)
    const router = useRouter()
    return (
        <VerticalTabs open={open} setOpen={setOpen} className={styles.tabs}>
            <Tab label={'Servidores AD'}  className={styles.tab}>
                <ADList/>
            </Tab>
            <Tab label={'Usuários'} className={styles.tab}>
                <UserList redirect={router.push}/>
            </Tab>
            <Tab label={'Privilégios'}  group={'Acesso'} className={styles.tab}>
                <PrivilegeList/>
            </Tab>

            <Tab label={'Endpoints'} group={'Acesso'} className={styles.tab}>
                <EndpointList redirect={router.push}/>
            </Tab>
        </VerticalTabs>
    )
}

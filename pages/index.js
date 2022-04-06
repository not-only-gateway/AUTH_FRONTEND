import React, {useState} from 'react'
import {Tab, VerticalTabs} from "@f-ui/core";
import styles from '../styles/Home.module.css'
import ADList from "../components/lists/ADList";

import PrivilegeList from "../components/lists/PrivilegeList";

import EndpointList from "../components/lists/EndpointList";
import AccessProfileList from "../components/lists/AccessProfileList";
import UserList from "../components/lists/UserList";


export default function Home() {
    const [open, setOpen] = useState(0)

    return (
        <VerticalTabs open={open} setOpen={setOpen} className={styles.tabs}>
            <Tab label={'Servidores AD'}  className={styles.tab}>
                <ADList/>
            </Tab>
            <Tab label={'Usuários'} className={styles.tab}>
                <UserList/>
            </Tab>
            <Tab label={'Privilégios'}  group={'Acesso'} className={styles.tab}>
                <PrivilegeList/>
            </Tab>
            <Tab label={'Perfis de acesso'} group={'Acesso'} className={styles.tab}>
                <AccessProfileList/>
            </Tab>
            <Tab label={'Endpoints'} group={'Acesso'} className={styles.tab}>
                <EndpointList/>
            </Tab>
        </VerticalTabs>)
}

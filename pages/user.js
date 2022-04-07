import React, {useEffect, useState} from 'react'
import styles from '../styles/Details.module.css'

import {useRouter} from "next/router";
import {Button, Tab, VerticalTabs} from "@f-ui/core";
import FormTemplate from "../ext/FormTemplate";
import useRequest from "../ext/hooks/useRequest";
import getQuery from "../ext/getQuery";
import useQuery from "../ext/hooks/useQuery";
import page from '../public/page.json'
import List from "../ext/list/List";
import {KEYS} from "../templates/KEYS";
import {USER} from "../templates/FORMS";


export default function User() {
    const [open, setOpen] = useState(0)
    const {make} = useRequest(false)
    const router = useRouter()
    const [entity, setEntity] = useState()

    const hook = useQuery(getQuery('access_privilege', {host: router.query.id}))

    useEffect(() => {
        if (router.isReady) {
            make({
                url: page.host + '/api/user/' + router.query.id, method: 'get'
            }).then(res => {
                setEntity(res?.data)
                hook.clean()
            })
        }
    }, [router.isReady, router.query])

    return (<div className={styles.modal}>
            {entity !== undefined ? (<>
                    <h1 className={styles.header}>
                        <Button className={styles.button} variant={'outlined'} onClick={() => {
                            router.push('/')
                            setOpen(0)
                        }}>
                            <span className={'material-icons-round'}
                                  style={{fontSize: '1.2rem'}}>chevron_left</span>
                        </Button>
                        Host
                        <div>
                            -
                        </div>
                        <div className={styles.data}>
                            {entity?.name}
                        </div>

                    </h1>

                    <VerticalTabs open={open} setOpen={setOpen} className={styles.wrapper}>
                        <Tab className={styles.contentWrapper} label={'Dados básicos'}>
                            <FormTemplate
                                title={entity?.name}
                                initial={entity}
                                obj={USER}
                            />
                        </Tab>

                        <Tab className={styles.contentWrapper} label={'Máquinas vinculadas'}>
                            <List
                                onRowClick={() => null}
                                hook={hook}
                                keys={KEYS.USER_PRIVILEGE}
                                title={'Máquinas'}
                            />
                        </Tab>

                    </VerticalTabs>
                </>

            ) : undefined}

        </div>
    )
}

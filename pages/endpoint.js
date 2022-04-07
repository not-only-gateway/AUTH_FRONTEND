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
import {ENDPOINT} from "../templates/FORMS";


export default function Endpoint() {
    const [open, setOpen] = useState(0)
    const {make} = useRequest(false)
    const router = useRouter()
    const [entity, setEntity] = useState()

    const hook = useQuery(getQuery('endpoint_privilege', {endpoint: router.query.id}))

    useEffect(() => {
        if (router.isReady) {
            make({
                url: page.host + '/api/endpoint', method: 'get',
                data: {
                    identifier: router.query.id
                }
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
                            {entity?.denomination}
                        </div>

                    </h1>

                    <VerticalTabs open={open} setOpen={setOpen} className={styles.wrapper}>
                        <Tab className={styles.contentWrapper} label={'Dados básicos'}>
                            <FormTemplate
                                title={entity?.denomination}
                                initial={entity}
                                obj={ENDPOINT}
                            />
                        </Tab>

                        <Tab className={styles.contentWrapper} label={'Privilégios'}>
                            <List
                                onRowClick={() => null}
                                hook={hook}
                                keys={KEYS.ENDPOINT_PRIVILEGE}
                                title={'Privilégios'}
                            />
                        </Tab>

                    </VerticalTabs>
                </>

            ) : undefined}

        </div>
    )
}

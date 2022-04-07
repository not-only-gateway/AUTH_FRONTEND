import React, {useState} from "react";
import PropTypes from "prop-types";
import {Switcher} from "@f-ui/core";
import useQuery from "../../ext/hooks/useQuery";
import getQuery from "../../ext/getQuery";
import {KEYS} from "../../templates/KEYS";
import styles from "../../styles/Home.module.css";

import List from "../../ext/list/List";
import FormTemplate from "../../ext/FormTemplate";
import page from "../../public/page.json";
import useRequest from "../../ext/hooks/useRequest";
import {AD} from "../../templates/FORMS";

export default function ADList(props) {
    const [current, setCurrent] = useState()
    const hook = useQuery(getQuery('active_directory'))
    const {make} = useRequest(true)
    return (
        <Switcher openChild={current ? 0 : 1} className={styles.wrapper}>
            <FormTemplate
                title={'Servidor AD'}
                initial={current}
                handleClose={() => setCurrent(undefined)}
                obj={AD}
                submit={(data) => {
                    make({
                        url: page.host + '/api/active_directory' + (Object.keys(current).length === 0 ? '' : '/' + props.data.id),
                        method: Object.keys(current).length === 0 ? 'POST' : 'PUT',
                        data: {
                            ...data,
                            id: data.id.replaceAll('.', '').replaceAll('-', '')
                        }
                    }).catch()
                }}
            />
            <List
                options={[{
                    label: 'Deletar',

                    validadeChoice: true,
                    validationMessage: 'Tem certeza ?',

                    icon: <span className={'material-icons-round'}>delete_forever</span>,
                    onClick: (e) => {

                        make({
                            url: page.host + '/api/active_directory/' + e.id,
                            method: 'delete'
                        })
                            .then(() => hook.clean())
                            .catch()
                    }
                }]}
                hook={hook}
                createOption={true}
                onCreate={() => setCurrent({})}
                keys={KEYS.AD}
                onRowClick={e => setCurrent(e)}
                title={'Servidores AD'}
            />
        </Switcher>
    )
}

ADList.propTypes = {
    redirect: PropTypes.func
}

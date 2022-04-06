import React, {useState} from "react";
import PropTypes from "prop-types";
import {Switcher} from "@f-ui/core";
import useQuery from "../../ext/visualization/hooks/useQuery";
import getQuery from "../../utils/getQuery";
import styles from "../../styles/Home.module.css";
import List from "../../ext/visualization/list/List";
import {KEYS} from "../../templates/KEYS";
import FormTemplate from "../../ext/FormTemplate";
import page from "../../public/page.json";

import useRequest from "../../ext/useRequest";
import {SIMPLE} from "../../templates/forms/SIMPLE";

export default function AccessProfileList(props) {
    const [current, setCurrent] = useState()
    const hook = useQuery(getQuery('effective'))
    const {make} = useRequest(true)
    return (
        <Switcher openChild={current ? 0 : 1} className={styles.wrapper}>
            <FormTemplate
                title={'Cargo efetivo'}
                initial={current}
                handleClose={() => setCurrent(undefined)}
                obj={SIMPLE}
                submit={(data) => {
                    make({
                        url: page.host + '/api/effective' + (Object.keys(current).length === 0 ? '' : '/' + props.data.id),
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
                        console.log(e)
                        make({
                            url: page.host + '/api/effective/' + e.id,
                            method: 'delete'
                        })
                            .then(() => hook.clean())
                            .catch()
                    }
                }]}
                hook={hook}
                createOption={true}
                onCreate={() => setCurrent({})}
                keys={KEYS.SIMPLE}
                onRowClick={e => setCurrent(e)}
                title={'Perfis de acesso'}
        />
        </Switcher>)

}

AccessProfileList.propTypes = {
    handleClose: PropTypes.func,
    create: PropTypes.bool,
    data: PropTypes.object
}

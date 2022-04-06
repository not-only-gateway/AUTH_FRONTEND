import React, {useState} from "react";
import PropTypes from "prop-types";
import {Switcher} from "@f-ui/core";
import useQuery from "../../ext/visualization/hooks/useQuery";
import getQuery from "../../utils/getQuery";
import {KEYS} from "../../templates/KEYS";
import styles from "../../styles/Home.module.css";
import List from "../../ext/visualization/list/List";

export default function UserList(props) {
    const [current, setCurrent] = useState()
    const hook = useQuery(getQuery('unit'))
    return (

            <List
                hook={hook}
                keys={KEYS.USER}
                onRowClick={e => setCurrent(e)}
                title={'Usuários'}
            />
        )

}

UserList.propTypes = {
    handleClose: PropTypes.func,
    create: PropTypes.bool,
    data: PropTypes.object
}
